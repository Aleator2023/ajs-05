import Character from '../src/character'

class Swordsman extends Character {
    constructor(name, type = 'Swordsman') {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  export {  Swordsman };