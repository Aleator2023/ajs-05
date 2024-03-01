export default class Character {
    constructor(name, type) {
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      
      if (name.length < 2 || name.length > 10) {
        throw new Error('Имя должно содержать от 2 до 10 символов');
      } else {
        this.name = name;
      }
  
      if (!validTypes.includes(type)) {
        throw new Error('Неизвестное существо');
      } else {
        this.type = type;
      }
  
      this.health = 100;
      this.level = 1;
      // Attack and defence will be set by subclasses
      this.attack = undefined;
      this.defence = undefined;
    }
  }
  
 