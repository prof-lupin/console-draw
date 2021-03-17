import CanvasCommand from '../../../src/commands/canvas-command.js';

test('valid command should create a canvas with dimensions incremented by 2.', () => {
  const canvas = new CanvasCommand('C 7 3').execute();
  expect(canvas.width).toBe(9);
  expect(canvas.height).toBe(5);
});

test('object creation should throw error upon invalid commands like empty strings or invalid arguments.', () => {
  expect(() => new CanvasCommand()).toThrow();
  expect(() => new CanvasCommand('C 0 1').execute()).toThrow();
});
