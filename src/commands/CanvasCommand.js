import Canvas from '../shapes/Canvas.js';

export default class CanvasCommand {
    constructor(str) {
        const logCmd = '[C w h]';
        if(!str) {
            throw new Error(`${logCmd} expected. Invalid canvas command`);
        }
        const params = str.split(' ').splice(1);
        // console.log(params);
        if(params.length !== 2) {
            throw new Error(`${logCmd} expected 2 args, received ${params.length}`);
        }
        const inputs = params.map(arg => parseInt(arg, 10));
        try {
            this.shape = new Canvas(inputs[0], inputs[1]);
        } catch(err) {
            throw new Error(`In canvas ${err}`);
        }
    }
    
    execute = () => {
        return this.shape;
    }
}