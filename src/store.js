import axios from 'axios';

export default {
  findMonsters: () => axios.get('data/5e-SRD-Monsters.json'),
};
