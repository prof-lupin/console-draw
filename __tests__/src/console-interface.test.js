import ConsoleInterface from '../../src/console-interface.js';
import Canvas from '../../src/shapes/canvas.js';
import Line from '../../src/shapes/line.js';

let intrfce;
let testInterface;

intrfce = new ConsoleInterface(testInterface);

test('addShape should add shape of type Canvas if the shape is a canvas', () => {
  const canvas = new Canvas(3, 3);
  intrfce = intrfce.addShape(canvas);
  expect(intrfce.canvas).toBe(canvas);
});

test('adding a shape before creating canvas should throw error.', () => {
  const shape = new Line(2, 3, 5, 3);
  expect(() => intrfce.addShape(shape)).toThrow();
});

test('should thow error when a shape goes beyond the bounds of the canvas.', () => {
  const canvas = new Canvas(3, 3);
  const line = new Line(2, 3, 2, 6);
  expect(() => intrfce.addShape(canvas).addShape(line)).toThrow();
});
