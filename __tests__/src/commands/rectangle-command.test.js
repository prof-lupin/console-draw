import RectangleCommand from '../../../src/commands/rectangle-command.js';

test('valid command should create a fill around [x, y] and colour [c].', () => {
  const rect = new RectangleCommand('R 5 2 8 6').execute();
  expect(rect.x1).toBe(5);
  expect(rect.y1).toBe(2);
  expect(rect.x2).toBe(8);
  expect(rect.y2).toBe(6);
});

test('object creation should throw error upon invalid commands like empty strings or invalid arguments.', () => {
  expect(() => new RectangleCommand()).toThrow();
  expect(() => new RectangleCommand('R 0 1 5 4').execute()).toThrow();
  expect(() => new RectangleCommand('R 2 1').execute()).toThrow();
  expect(() => new RectangleCommand('R 5 1 3 4').execute()).toThrow();
});
