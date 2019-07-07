import Creature from './Creature';

export default class Monster extends Creature {
  constructor(proto) {
    super(proto);
    this.type = proto.type;
    this.subtype = proto.subtype;
    this.actions = proto.actions;
    this.legendary_actions = proto.legendary_actions;
  }
}
