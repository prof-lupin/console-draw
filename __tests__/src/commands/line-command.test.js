import LineCommand from '../../../src/commands/line-command.js';

test('object creation should throw error upon invalid commands like empty strings or invalid arguments.', () => {
  expect(() => new LineCommand().toThrow());
  expect(() => new LineCommand('L 3 4 7 5').execute()).toThrow();
  expect(() => new LineCommand('L 3 4 -1 4').execute()).toThrow();
  expect(() => new LineCommand('L 0 1 7 1').execute()).toThrow();
  expect(() => new LineCommand('L 0 1 7').execute()).toThrow();
});
