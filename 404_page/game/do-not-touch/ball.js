class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "#3d3d3d"
    }

    // DRAWING THE BALL ON CURSOR
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    console() {
        return this.radius;
    }
}
