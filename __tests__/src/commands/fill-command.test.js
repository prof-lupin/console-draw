import FillCommand from '../../../src/commands/fill-command.js';

test('valid command should create a fill around [x, y] and colour [c].', () => {
  const fillTool = new FillCommand('B 10 3 o').execute();
  expect(fillTool.x).toBe(10);
  expect(fillTool.y).toBe(3);
  expect(fillTool.c).toBe('o');
});

test('object creation should throw error upon invalid commands like empty strings or invalid arguments.', () => {
  expect(() => new FillCommand()).toThrow();
  expect(() => new FillCommand('B 0 1 o').execute()).toThrow();
  expect(() => new FillCommand('B 2 1').execute()).toThrow();
});
