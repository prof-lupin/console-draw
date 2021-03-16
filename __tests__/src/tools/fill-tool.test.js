import Fill from '../../../src/tools/fill-tool.js';

test('should fill the space with the provided color', () => {
    const pixels = [
        ['-','|','|','-'],
        ['-',' ',' ','-'],
        ['-',' ',' ','-'],
        ['-',' ',' ','-'],
        ['-','|','|','-'],
    ];
    const expected = [
        ['-', '|', '|', '-'],
        ['-', 'A', 'A', '-'],
        ['-', 'A', 'A', '-'],
        ['-', 'A', 'A', '-'],
        ['-', '|', '|', '-'],
    ];
    const x = 1;
    const y = 2;
    const color = 'A';
    const fill = new Fill(x, y, color);
    const received = fill.paint(pixels);
    expect(received).toEqual(expected);
});