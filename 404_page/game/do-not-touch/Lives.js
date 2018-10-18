class Lives extends Display {
    constructor(life, font, fontSize, color, locX, locY) {
        super(font, fontSize, color, locX, locY);
        this.life = life;
        this.highScore = 0;
    }

    display(ctx) {
        ctx.font = this.fontSize + this.font; //this.fontSize + this.font
        ctx.fillStyle = this.color;

        ctx.fillText("Life: " + this.life, this.x, this.y);
    }
}
