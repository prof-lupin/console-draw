import Fill from "../utilities/Fill.js";

export default class FillCommand {
    constructor(str) {
        const logCmd = '[B x y c]';
        if(!str) {
            throw new Error(`${logCmd} expected. Invalid fill command`);
        }
        const params = str.split(' ').splice(1);
        // console.log(params);
        if(params.length !== 3) {
            throw new Error(`${logCmd} expected 3 args, received ${params.length}`);
        }
        // const inputs = params.map(arg => parseInt(arg, 10));
        const x = parseInt(params[0], 10);
        const y = parseInt(params[1], 10);
        try {
            this.shape = new Fill(x, y, params[2]);
        } catch(err) {
            throw new Error(`In fill ${err}`);
        }
    }
    
    execute = () => {
        return this.shape;
    }
}