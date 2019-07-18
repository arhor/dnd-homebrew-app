import fs from 'fs';

export default {

  load({ commit }) {
    // const saves = [];
    try {
      const files = fs.readdirSync('./saves');
      files.forEach((file) => {
        const buffer = fs.readFileSync(`./saves/${file}`);
        // STUB START
        const game = JSON.parse(buffer.toString());
        commit('SET_CURRENT_GAME', game);
        // STUB END
      });
    } catch (err) {
      console.log(err);
      fs.mkdirSync('./saves');
    }/* finally {
      *   commit('SET_SAVES', saves);
      * }
      */
  },

};
