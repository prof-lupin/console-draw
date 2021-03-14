import CommandFactory from '../../src/CommandFactory.js'

test('Command resolver should throw error if first letter of cmd is not upper case.', () => {
    // CommandFactory.resolveCommand('c 20 4');
    expect(() => CommandFactory.resolveCommand('c 20 4')).toThrow();
});

test('Command resolver should throw error if it receives empty string.', () => {
    expect(() => CommandFactory.resolveCommand('')).toThrow();
});

test('cmd should not be recognized if it is not defined.', () => {
    expect(() => CommandFactory.resolveCommand('W 20 30')).toThrow();
});