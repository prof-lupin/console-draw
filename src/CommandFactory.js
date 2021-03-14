import CanvasCommand from './commands/CanvasCommand.js';
import FillCommand from './commands/FillCommand.js';
import LineCommand from './commands/LineCommand.js';
import QuitCommand from './commands/QuitCommand.js';
import RectangleCommand from './commands/RectangleCommand.js';

export default class CommandFactory {
    static resolveCommand(str) {
        if(!str || str.length === 0) {
            throw new Error('invalid command');
        }
        if(str[0] !== str[0].toUpperCase()) {
            throw new Error('The command identifier should be an uppercase letter');
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
            case 'B':
                return new FillCommand(str);
            default:
                return null;
        }
    }
}