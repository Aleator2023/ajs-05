import Character from '../src/index';

describe('Character', () => {
  test('should create character with correct properties', () => {
    const character = new Character('Alex', 'Swordsman');
    expect(character.name).toBe('Alex');
    expect(character.type).toBe('Swordsman');
      });


});
