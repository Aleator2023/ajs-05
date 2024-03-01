import { Zombie } from '../src/zombie';

test('Правильно создается объект', () => {
    const  zombie = new  Zombie ('Alex');
    const correct = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: 'Alex',
        type: 'Zombie',
    };
    
    expect(zombie).toEqual(correct);
});