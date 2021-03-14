import CanvasCommand from './commands/CanvasCommand.js';
import LineCommand from './commands/LineCommand.js';
import QuitCommand from './commands/QuitCommand.js';
import RectangleCommand from './commands/RectangleCommand.js';

export default class CommandFactory {
    static resolveCommand(str) {
        if(!str || str.length === 0) {
            throw new Error('invalid command');
        }
        switch(str[0]) {
            case 'C':
                return new CanvasCommand(str);
            case 'Q':
                return new QuitCommand();
            case 'L':
                return new LineCommand(str);
            case 'R':
                return new RectangleCommand(str);
            default:
                return null;
        }
    }
}