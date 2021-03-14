import Rectangle from '../../../src/shapes/Rectangle.js';

test('should throw error if arguments support a line rather than a rect', () => {
    expect(() => new Rectangle('R 1 1 5 1')).toThrow();
});