import Rectangle from '../shapes/rectangle.js';

export default class RectangleCommand {
  constructor(str) {
    const logCmd = '[R x1 y1 x2 y2]';
    if (!str) {
      throw new Error(`${logCmd} expected. Invalid rectangle command`);
    }
    const params = str.split(' ').splice(1);
    // console.log(params);
    if (params.length !== 4) {
      throw new Error(`${logCmd} expected 4 args, received ${params.length}`);
    }
    const inputs = params.map((arg) => parseInt(arg, 10));
    try {
      this.shape = new Rectangle(inputs[0], inputs[1], inputs[2], inputs[3]);
    } catch (err) {
      throw new Error(`In rectangle ${err}`);
    }
    this.execute = () => this.shape;
  }

  // execute = () => this.shape
}
