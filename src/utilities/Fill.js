export default class Fill {
    constructor(x, y, c) {
        [x,y].forEach((arrElem) => {
            if(typeof(arrElem) !== 'number' || isNaN(arrElem) || arrElem<0) {
                throw new Error('(x, y) must be positive integers');
            }
        });
        if(c.length !== 1) {
            throw new Error('color must be a single character');
        }
        this.x = x;
        this.y = y;
        this.c = c;
    }

    renderAt(x, y) {
        return this.pixels && this.pixels[x] && this.pixels[x][y] ? this.pixels[x][y] : null;
    }

    rendersInside(w, h) {
        return this.x<w && this.y<h;
    }

    paint = (pixels) => {
        pixels = pixels.slice(0);
        this.fillSpace(pixels, this.x, this.y, ' ', this.c);
        return pixels;
    }

    fillSpace = (pixels, x, y, currColor, targetColor) => {
        const pxColor = pixels[x][y];
        if(pxColor !== currColor) return;
        if(pxColor === targetColor) return;
        let px = [{
            x,
            y,
        }];
        while(px.length > 0) {
            const currPx = px[0];
            px = px.slice(1);
            this.paintPxAt(pixels, currPx.x + 1, currPx.y, currColor, targetColor, px);
            this.paintPxAt(pixels, currPx.x - 1, currPx.y, currColor, targetColor, px);
            this.paintPxAt(pixels, currPx.x, currPx.y + 1, currColor, targetColor, px);
            this.paintPxAt(pixels, currPx.x, currPx.y - 1, currColor, targetColor, px);
        }
    }

    paintPxAt = (pixels, x, y, currColor, targetColor, currPxArr) => {
        const nextPx = pixels.length > x && pixels[x].length > y && pixels[x][y];
        // console.log(nextPx);
        if(nextPx === currColor) {
            pixels[x][y] = targetColor;
            currPxArr.push({
                x,
                y,
            });
        }
    }
}