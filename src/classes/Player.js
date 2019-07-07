import Creature from './Creature';

export default class Player extends Creature {
  /**
   * @param {Object} proto
   */
  constructor(proto) {
    super(proto);
    this.feats = proto.feats;
  }

  // FIXME
  get initiative() {
    let baseIni = super.initiative;
    if (this.feats) {
      this.feats.forEach((it) => {
        if (it.name === 'Alert') {
          baseIni += Number(it.effect.value);
        }
      });
    }
    return baseIni;
  }
}
