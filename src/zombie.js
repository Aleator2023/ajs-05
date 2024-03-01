import Character from '../src/character'

class Zombie extends Character {
    constructor(name, type = 'Zombie') {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }

  export {  Zombie };