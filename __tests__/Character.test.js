import  Character  from '../src/character';

describe('Character', () => {
  test('should create a character with valid parameters', () => {
    const character = new Character('Archer', 'Bowman', 100, 1, 10, 40);
    expect(character.name).toBe('Archer');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBe(10);
    expect(character.defence).toBe(40);
  });

  test('throws an error if the name length is invalid', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('LongNameExceedingLimit', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('throws an error for an unknown type', () => {
    expect(() => new Character('Archer', 'Unknown')).toThrow('Неизвестное существо');
  });

  test('levelUp method should increase level and update stats', () => {
    const character = new Character('Mage', 'Magician', 80, 1, 40, 10);
    character.levelUp();
    expect(character.level).toBe(2);
    expect(character.attack).toBeCloseTo(48);
    expect(character.defence).toBeCloseTo(12);
    expect(character.health).toBe(100);
  });

  test('levelUp should throw an error if character is dead', () => {
    const character = new Character('Mage', 'Magician', 0, 1, 40, 10);
    expect(() => character.levelUp()).toThrow("Нельзя повысить левел умершего");
  });

  test('damage method should decrease health correctly', () => {
    const character = new Character('Warrior', 'Swordsman', 100, 1, 40, 10);
    character.damage(30);
    // Учитывая формулу уменьшения здоровья, ожидаемое здоровье будет:
    // health -= 30 * (1 - 10 / 100) = 100 - 27 = 73
    expect(character.health).toBe(73);
  });

  test('health should not become negative', () => {
    const character = new Character('Warrior', 'Swordsman', 10, 1, 40, 10);
    character.damage(200);
    expect(character.health).toBe(0);
  });
});

