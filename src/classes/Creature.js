export default class Creature {
  constructor(proto) {
    this.name = proto.name;
    this.size = proto.size;
    this.alignment = proto.alignment;
    this.armor_class = proto.armor_class;
    this.hit_points = proto.hit_points;
    this.hit_dice = proto.hit_dice;
    this.speed = proto.speed;
    this.strength = proto.strength;
    this.dexterity = proto.dexterity;
    this.constitution = proto.constitution;
    this.intelligence = proto.intelligence;
    this.wisdom = proto.wisdom;
    this.charisma = proto.charisma;
    this.strength_save = proto.strength_save;
    this.dexterity_save = proto.dexterity_save;
    this.constitution_save = proto.constitution_save;
    this.intelligence_save = proto.intelligence_save;
    this.wisdom_save = proto.wisdom_save;
    this.charisma_save = proto.charisma_save;
    this.damage_vulnerabilities = proto.damage_vulnerabilities;
    this.damage_resistances = proto.damage_resistances;
    this.damage_immunities = proto.damage_immunities;
    this.condition_immunities = proto.condition_immunities;
    this.senses = proto.senses;
    this.special_abilities = proto.special_abilities;
  }

  get initiative() {
    if (this.iniCached === null || this.iniCached === undefined) {
      const rollResult = Math.round(Math.random() * 20);
      const dexBonus = Math.floor((this.dexterity - 10) / 2);
      this.iniCached = rollResult + dexBonus;
    }
    return this.iniCached;
  }
}
