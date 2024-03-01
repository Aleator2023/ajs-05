export default class Character {
    constructor(name, type, health = 100, level = 1, attack, defence) {
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
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error("Нельзя повысить левел умершего");
      }
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health === 0) {
        return;
      }
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }   
    


  
  
 