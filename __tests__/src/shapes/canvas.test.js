import Canvas from '../../../src/shapes/canvas.js';

const width = 4;
const height = 5;

test('horizontal edges of the canvas should have the dash character and the vertical edges have the pipe character.', () => {
    const canvas = new Canvas(width, height);
    for(let j=0; j<canvas.height; j+=1) {
        for(let i=0; i<canvas.width; i+=1) {
            const pixel = canvas.renderAt(i, j);
            if(j === 0 || j === canvas.height-1) {
                expect(pixel).toBe('-');
            }
            else if(i === 0 || i === canvas.width-1) {
                expect(pixel).toBe('|');
            }
            else
                expect(pixel).toBe(' ');
        }
    }
});

test('canvas dimensions should be increased by 2.', () => {
    const canvas = new Canvas(width, height);
    expect(canvas.width).toBe(width+2);
    expect(canvas.height).toBe(height+2);
});
