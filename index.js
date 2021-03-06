#!/usr/bin/env node

import { createInterface } from 'readline';
import CommandFactory from './src/command-factory.js';
import ConsoleInterface from './src/console-interface.js';

function run() {
  let pauseInput = false;
  const io = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let intfc = new ConsoleInterface(io);

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
  };

  io.on('line', (input) => {
    if (pauseInput) return;
    pauseReadline(() => {
      const commandType = CommandFactory.resolveCommand(input);
      if (commandType) {
        const shape = commandType.execute();
        if (shape.renderAt) {
          intfc = intfc.addShape(shape);
          // console.log('before render');
          intfc.render();
          // console.log('after render');
          io.write('\n\nEnter Command: \n');
        }
      }
    });
  });

  pauseReadline(() => {
    io.write('\n\n Paint Board is online, have fun!\n\n');
    io.write('Enter command: \n');
  });
}

run();
