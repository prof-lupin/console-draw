import Line from '../../../src/shapes/line.js';

test('Line should throw error if args will not produce horizontal/vertical line', () => {
  expect(() => new Line('L 2 3 4 5')).toThrow();
});
