class Enemies extends Ball {
    constructor(enemyX, enemyY, speed, radius) {
        super(radius);
        this.enemyX = enemyX;
        this.enemyY = enemyY;
        this.speed = speed;
        this.radius = radius;
        this.angle = Math.floor(Math.random()*359);
    }

    // DRAWING THE BALL OF THE ENEMY
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.enemyX, this.enemyY, this.radius, 0, Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    console() {
        return this.speed;
    }

    move() {
        if(this.enemyX+this.radius > canvas.width || this.enemyX-this.radius < 0 || this.enemyY+this.radius > canvas.height || this.enemyY-this.radius < 0) {
            this.speed = -this.speed;
            this.angle = this.angle+120; //Math.floor(Math.random()*270) + 180;
        } else {
            // COLLISION DETECTION
            if ((this.enemyX + this.radius/2) > (x - ballRadius/2) && (this.enemyX - this.radius/2) < (x + ballRadius/2) && (this.enemyY + this.radius) > (y - ballRadius/2) && (this.enemyY - this.radius/2) < (y + ballRadius/2)) {
                // alert("You died!");
                console.log("Collision Detected!");
                pause = true;
            }
        }
        this.enemyX += this.speed * Math.cos(this.angle * Math.PI / 180);
        this.enemyY += this.speed * Math.sin(this.angle * Math.PI / 180);
    }



}
