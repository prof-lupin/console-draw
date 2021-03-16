export default class Canvas {
    constructor(w, h) {
        [w,h].forEach((arrElem) => {
            if(typeof(arrElem) !== 'number' || isNaN(arrElem) || arrElem<0) {
                throw new Error('(w,h) must be positive integers');
            }
        });
        this.height = h+2;
        this.width = w+2;
    }

    renderAt(x, y) {
        if(y===0 || y===this.height-1) {
            return '-';
        }
        if(x===0 || x===this.width-1) {
            return '|';
        }
        return ' ';
    }
}
