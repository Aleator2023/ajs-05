import  Character  from '../src/character';

describe('Character', () => {
  test('should create a valid character', () => {
    const character = new Character('Archer', 'Bowman');
    expect(character.name).toBe('Archer');
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
    expect(character.attack).toBeUndefined();
    expect(character.defence).toBeUndefined();
  });

  test('should throw an error for an invalid name length', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
    expect(() => new Character('LongNameOverTen', 'Bowman')).toThrow('Имя должно содержать от 2 до 10 символов');
  });

  test('should throw an error for an unknown type', () => {
    expect(() => new Character('Archer', 'Unknown')).toThrow('Неизвестное существо');
  });

  test('initial properties should be set correctly', () => {
    const character = new Character('Archer', 'Bowman');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });
});