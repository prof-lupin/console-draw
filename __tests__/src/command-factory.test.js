import CommandFactory from '../../src/command-factory.js';
import CanvasCommand from '../../src/commands/canvas-command.js';
import LineCommand from '../../src/commands/line-command.js';
import RectangleCommand from '../../src/commands/rectangle-command.js';

let commandType;

test('Command resolver should throw error if first letter of cmd is not upper case.', () => {
  // CommandFactory.resolveCommand('c 20 4');
  expect(() => CommandFactory.resolveCommand('c 20 4')).toThrow();
});

test('Command resolver should throw error if it receives empty string.', () => {
  expect(() => CommandFactory.resolveCommand('')).toThrow();
});

test('cmd should not be recognized if it is not defined.', () => {
  expect(() => CommandFactory.resolveCommand('W 20 30')).toThrow();
});

test('resolveCommand should resolve to canvas command upon [C w h].', () => {
  commandType = CommandFactory.resolveCommand('C 20 6');
  const canvasCommand = new CanvasCommand('C 20 6');
  expect(commandType.toString())
    .toEqual(canvasCommand.toString()); // since both contain same serialized object
});

test('resolveCommand should resolve to line command upon [L x1 y1 x2 y2].', () => {
  commandType = CommandFactory.resolveCommand('L 3 4 6 4');
  const lineCommand = new LineCommand('L 3 4 6 4');
  expect(commandType.toString()).toEqual(lineCommand.toString());
});

test('resolveCommand should resolve to rectangle command upon [R x1 y1 x2 y2].', () => {
  commandType = CommandFactory.resolveCommand('R 3 4 6 6');
  const rectCommand = new RectangleCommand('R 3 4 6 6');
  expect(commandType.toString()).toEqual(rectCommand.toString());
});
