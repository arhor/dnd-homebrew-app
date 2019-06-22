import axios from 'axios';

export default {
  findMonsters: () => axios.get('5e-SRD-Monsters.json'),
};
