import CanvasCommand from './commands/canvas-command.js';
import FillCommand from './commands/fill-command.js';
import LineCommand from './commands/line-command.js';
import QuitCommand from './commands/quit-command.js';
import RectangleCommand from './commands/rectangle-command.js';

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
                throw new Error('Command not recognized');
        }
    }
}