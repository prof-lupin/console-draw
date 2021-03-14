import Canvas from './shapes/Canvas.js';

export default class ConsoleInterface {
    constructor(intrfce) {
        this.rl = intrfce;
    }

    addShape(shp) {
        const layout = Object.assign(new ConsoleInterface(), this);
        if(shp instanceof Canvas) {
            // console.log('hello from addshape');
            layout.canvas = shp;
        }
        return layout;
    }

    render() {
        for(let y=0; y<this.canvas.height; y+=1) {
            for(let x=0; x<this.canvas.width; x+=1) {
                this.rl.write(this.canvas.renderAt(x, y));
            }
            this.rl.write('\n');
        }
    }
}