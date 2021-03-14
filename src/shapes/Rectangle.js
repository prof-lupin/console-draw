export default class Rectangle {
    constructor(x1, y1, x2, y2) {
        [x1, y1, x2, y2].forEach((arrElem) => {
            if(typeof(arrElem)!== 'number' || isNaN(arrElem) || arrElem < 0) {
                throw new Error('Provided coordinate values must be positive integers');
            }
        });
        this.x1 = x1;
        this.x2 = x2;
        this.y1 = y1;
        this.y2 = y2;
    }

    renderAt(x, y) {
        if ((x >= this.x1 && x <= this.x2 && (y === this.y1 || y === this.y2)) || (y >= this.y1 && y <= this.y2 && (x === this.x1 || x === this.x2)))
            return 'X';
            
        return null;
    }

    rendersInside(w, h) {
        return this.x1<w && this.x2<w && this.y1<h && this.y2<h;
    }
}