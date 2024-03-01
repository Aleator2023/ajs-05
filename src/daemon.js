import Character from '../src/character'

class Daemon extends Character {
    constructor(name, type = 'Daemon') {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }

  export {  Daemon };