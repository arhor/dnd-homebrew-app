export default {

  getMonstersByName: state => (name) => {
    const query = String(name);
    return query
      ? state.all.filter(m => m.name.toLowerCase().includes(query))
      : [];
  },

};
