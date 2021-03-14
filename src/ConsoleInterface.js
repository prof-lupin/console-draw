import Canvas from './shapes/Canvas.js';

export default class ConsoleInterface {
    constructor(intrfce) {
        this.rl = intrfce;
        this.shapes = [];
    }

    addShape(shp) {
        this.restrictShapeInsideCanvas(shp);
        const layout = Object.assign(new ConsoleInterface(), this);
        if(shp instanceof Canvas) {
            // console.log('hello from addshape');
            layout.canvas = shp;
            layout.shapes = [];
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

    render(shp) {
        for(let y=0; y<this.canvas.height; y+=1) {
            for(let x=0; x<this.canvas.width; x+=1) {
                // this.rl.write(this.canvas.renderAt(x, y)); // for canvas

                if(shp instanceof Canvas) {
                    this.rl.write(this.canvas.renderAt(x, y)); // for canvas
                }
                else {
                    let pixel;
                    this.rl.write(this.canvas.renderAt(x, y)); // for canvas
                    for(let s= this.shapes.length - 1; s>=0; s-=1) {
                        const px = this.shapes[s].renderAt(x, y);
                        if(px) {
                            pixel = px;
                            break;
                        }
                    }
                    this.rl.write(pixel);
                }
            }
            this.rl.write('\n');
        }
    }
}