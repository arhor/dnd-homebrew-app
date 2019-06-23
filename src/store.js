import axios from 'axios';

export default {
  init() {
    this.tasks.forEach(task => task.run(this.appData));
    let loaded = false;
    // TODO: add tries count to avoid infinite loading.
    // let counter = 0;
    const timer = setInterval(() => {
      this.tasks.forEach((task) => { loaded = task.ready; });
      // counter += 1;
      if (loaded) {
        clearInterval(timer);
      }
    }, 50);
  },
  findMonsters() {
    return this.appData.monsters;
  },
  appData: {
    name: 'D&D Homebrew App',
    monsters: [],
    loadMonsters(data) {
      this.monsters = data;
    },
  },
  tasks: [
    {
      description: 'Initialize monsters data',
      ready: false,
      async run(storage) {
        // TODO: add error handling.
        const response = await axios.get('data/5e-SRD-Monsters.json');
        storage.loadMonsters(response.data);
        this.ready = true;
      },
    },
  ],
};
