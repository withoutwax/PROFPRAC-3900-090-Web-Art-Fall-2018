class Display {
    constructor(font, fontSize, color, locX, locY) {
        this.font = font;
        this.fontSize = fontSize;
        this.color = color;
        this.x = locX;
        this.y = locY;
    }

    display(ctx) {
        ctx.font = this.fontSize + this.font; //this.fontSize + this.font
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
    }
}
