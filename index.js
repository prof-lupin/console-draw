#!/usr/bin/env node

import {createInterface} from 'readline';
import CommandFactory from './src/command-factory.js';
import ConsoleInterface from './src/console-interface.js';

function run() {
    let pauseInput = false;
    const io = createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    let intf = new ConsoleInterface(io);

    const pauseReadline = (func) => {
        pauseInput = true;
        io.pause();
        try {
            func();
        } catch (err) {
            io.write(err.message);
            io.write('\n');
        }
        io.resume();
        pauseInput = false;
    }

    io.on('line', (input) => {
        if(pauseInput) return;
        pauseReadline(() => {
            const commandType = CommandFactory.resolveCommand(input);
            if(commandType) {
                const shape = commandType.execute();
                if(shape.renderAt) {
                    intf = intf.addShape(shape);
                    // console.log('before render');
                    intf.render();
                    // console.log('after render');
                    io.write('\n');
                    console.log('Enter Command:')
                }
            }
        });
    });

    pauseReadline(() => {
        io.write('\n\n Paint Board is online, have fun!\n\n');
        console.log('Enter Command: ');
    })
}

run();