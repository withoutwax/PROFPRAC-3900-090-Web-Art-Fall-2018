class Score extends Display {
    constructor(score, font, fontSize, color, locX, locY) {
        super(font, fontSize, color, locX, locY);
        this.score = score;
        this.highScore = 0;
    }

    display(ctx) {
        ctx.font = this.fontSize + this.font; //this.fontSize + this.font
        ctx.fillStyle = this.color;

        // CONFIGURE TIMER FUNCTION (FOR SCORE)
        this.score = setTimeout(this.score += 1, 1000);
        ctx.fillText("Score: " + this.score, this.x, this.y);
        ctx.fillText("High Score: " + this.highScore, this.x, this.y+20);
    }
}
