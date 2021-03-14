import CanvasCommand from './commands/CanvasCommand.js';

export default class CommandFactory {
    static resolveCommand(str) {
        if(!str || str.length === 0) {
            throw new Error('invalid command');
        }
        switch(str[0]) {
            case 'C':
                return new CanvasCommand(str);
            default:
                return null;
        }
    }
}