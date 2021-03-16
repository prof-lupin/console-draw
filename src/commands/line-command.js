import Line from '../shapes/line.js';

export default class LineCommand {
    constructor(str) {
        const logCmd = '[L x1 y1 x2 y2]';
        if(!str) {
            throw new Error(`${logCmd} expected. Invalid line command`);
        }
        const params = str.split(' ').splice(1);
        // console.log(params);
        if(params.length !== 4) {
            throw new Error(`${logCmd} expected 4 args, received ${params.length}`);
        }
        const inputs = params.map(arg => parseInt(arg, 10));
        try {
            this.shape = new Line(inputs[0], inputs[1], inputs[2], inputs[3]);
        } catch(err) {
            throw new Error(`In line ${err}`);
        }
    }
    
    execute = () => {
        return this.shape;
    }
}
