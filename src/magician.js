import Character from '../src/character'

class Magician extends Character {
    constructor(name, type = 'Magician') {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }

  export { Magician };