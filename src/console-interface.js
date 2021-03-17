import Canvas from './shapes/canvas.js';
import Fill from './tools/fill-tool.js';

export default class ConsoleInterface {
  constructor(intrfce) {
    this.rl = intrfce;
    this.shapeStack = [];
    this.pixelsRecord = [];
  }

  addShape(shp) {
    this.restrictShapeInsideCanvas(shp);
    const layout = Object.assign(new ConsoleInterface(), this);
    // console.log('hello from addshape');
    if (shp instanceof Canvas) {
      // console.log('hello from addshape');
      layout.canvas = shp;
      layout.shapeStack = [];
      layout.pixelsRecord = [];
    } else if (shp instanceof Fill) {
      // console.log('in addshape fill');
      layout.pixelsRecord = shp.paint(layout.pixelsRecord);
    } else if (shp.renderAt) {
      layout.shapeStack.push(shp);
    }
    return layout;
  }

  restrictShapeInsideCanvas(shp) {
    if (shp === null) {
      throw new Error('Invalid shape');
    } else if (!(shp instanceof Canvas)) {
      if (this.canvas === null) {
        throw new Error('No existing canvas');
      }
      if (shp.rendersInside && !shp.rendersInside(this.canvas.width - 1, this.canvas.height - 1)) {
        throw new Error('Shape out of bounds!');
      }
    }
  }

  render() {
    for (let y = 0; y < this.canvas.height; y += 1) {
      for (let x = 0; x < this.canvas.width; x += 1) {
        let pixel = (x === 0 || y === 0) ? this.canvas.renderAt(x, y) : null;

        const line = this.pixelsRecord[x];
        if (!line) this.pixelsRecord[x] = [];

        if (!pixel) {
          for (let s = this.shapeStack.length - 1; s >= 0; s -= 1) {
            const shapeRendersPx = this.shapeStack[s].renderAt(x, y);
            if (shapeRendersPx) {
              pixel = shapeRendersPx;
              break;
            }
          }
        }

        if (!pixel) {
          pixel = this.pixelsRecord[x][y] ? this.pixelsRecord[x][y] : this.canvas.renderAt(x, y);
        }
        this.pixelsRecord[x][y] = pixel;
        this.rl.write(pixel);
      }
      this.rl.write('\n');
    }
  }
}
