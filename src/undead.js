import Character from '../src/character'

class Undead extends Character {
    constructor(name, type = 'Undead') {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
}

export { Undead };