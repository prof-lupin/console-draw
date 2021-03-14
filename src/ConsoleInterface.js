import Canvas from './shapes/Canvas.js';
import Fill from './utilities/Fill.js';

export default class ConsoleInterface {
    constructor(intrfce) {
        this.rl = intrfce;
        this.shapes = [];
        this.pixels = [];
    }

    addShape(shp) {
        this.restrictShapeInsideCanvas(shp);
        const layout = Object.assign(new ConsoleInterface(), this);
        // console.log('hello from addshape');
        if(shp instanceof Canvas) {
            // console.log('hello from addshape');
            layout.canvas = shp;
            layout.shapes = [];
            layout.pixels = [];
        }
        else if(shp instanceof Fill) {
            // console.log('in addshape fill');
            layout.pixels = shp.paint(layout.pixels);
        }
        else if(shp.renderAt) {
            layout.shapes.push(shp);
        }
        return layout;
    }

    restrictShapeInsideCanvas(shp) {
        if(shp === null) {
            throw new Error('Invalid shape');
        }
        else if(!(shp instanceof Canvas)) {
            if(this.canvas === null) {
                throw new Error('No existing canvas');
            }
            if(shp.rendersInside && !shp.rendersInside(this.canvas.width - 1, this.canvas.height - 1)) {
                throw new Error('Shape out of bounds!');
            }
        }
    }

    render() {
        for(let y=0; y<this.canvas.height; y+=1) {
            for(let x=0; x<this.canvas.width; x+=1) {
                let pixel = (x === 0 || y ===0) ? this.canvas.renderAt(x, y) : null;

                const line = this.pixels[x];
                if(!line) this.pixels[x] = [];

                if(!pixel) {
                    for(let s = this.shapes.length - 1; s >= 0; s-=1) {
                        const shapeRendersPx = this.shapes[s].renderAt(x, y);
                        if(shapeRendersPx) {
                            pixel = shapeRendersPx;
                            break;
                        }
                    }
                }

                if(!pixel) {
                    pixel = this.pixels[x][y] ? this.pixels[x][y] : this.canvas.renderAt(x, y);
                }
                this.pixels[x][y] = pixel;
                this.rl.write(pixel);
            }
            this.rl.write('\n');
        }
    }
}