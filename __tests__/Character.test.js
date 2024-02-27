import { Character } from '../src/index';

describe('Character', () => {
  test('should create a character with valid name and type', () => {
    const character = new Character('Alex', 'Bowman');
    expect(character.name).toBe('Alex');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBeUndefined();
    expect(character.defence).toBeUndefined();
  });

  test('should throw an error if name length is less than 2', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with 2 to 10 characters');
  });

  test('should throw an error if name length is more than 10', () => {
    expect(() => new Character('AlexanderTheGreat', 'Bowman')).toThrow('Name must be a string with 2 to 10 characters');
  });

  test('should throw an error if name is not a string', () => {
    expect(() => new Character(1234, 'Bowman')).toThrow('Name must be a string with 2 to 10 characters');
  });

  test('should throw an error for invalid character type', () => {
    expect(() => new Character('Alex', 'InvalidType')).toThrow('Invalid character type');
  });

  test('should allow valid types', () => {
    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    validTypes.forEach(type => {
      expect(() => new Character('Alex', type)).not.toThrow();
    });
  });
});


