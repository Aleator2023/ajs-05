class Character {
    constructor(name, type) {
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Name must be a string with 2 to 10 characters');
      }
      if (!validTypes.includes(type)) {
        throw new Error('Invalid character type');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      // Attack and defence will be set by subclasses
      this.attack = undefined;
      this.defence = undefined;
    }
  }
  
  class Bowman extends Character {
    constructor(name, type = 'Bowman') {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Swordsman extends Character {
    constructor(name, type = 'Swordsman') {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  class Magician extends Character {
    constructor(name, type = 'Magician') {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Daemon extends Character {
    constructor(name, type = 'Daemon') {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Undead extends Character {
    constructor(name, type = 'Undead') {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Zombie extends Character {
    constructor(name, type = 'Zombie') {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }

  export { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie };

  
