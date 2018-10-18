let canvas, ctx;
const score = 0;
const lives = 3;
let pause = false;

// OOP
let ball;
let enemy;
let x, y; // FOR MOUSE CURSOR
let enemyX;
let enemyY;
const noEnemies = 2;
let enemies = [];
const ballRadius = 10;
const enemyRadius = 3;

let displayScore;
let displayLife;

// LOAD WINDOW
window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousemove", mouseMoveHandler, false);

    // game = setInterval(draw, 1000/framesPerSecond);

    // Starting point for the Enemies
    enemyX = canvas.width/2;
    enemyY = canvas.height/2;

    // Create a Cursor Ball
    ball = new Ball(x, y, ballRadius);
    // Create Multiple incidence of Enemies

    for (let i = 0; i < noEnemies; i++) {
        enemy = new Enemies(enemyX, enemyY, 4, enemyRadius);
        enemies.push(enemy);
    }

    // DISPLAY SCORE & LIFE
    displayScore = new Score(score, "Arial", "16px", "#adadad", 8, 20);
    displayLife = new Lives(score, "Arial", "16px", "#adadad", canvas.width-65, 20)

    // REFRESH FRAMES & DRAW
    // PAUSING GAME AND REPLAY
    if (pause == false) {
        console.log("pause: false")
        let framesPerSecond = 30;
        setInterval(draw, 1000 / framesPerSecond);
    } else {
        console.log("The game is paused!");
        clearTimeout(draw);
    }
}

// CONFIGURING THE MOUSE MOVEMENT
function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    // let relativeY = e.clientY - canvas.offsetRight;
    if(relativeX > 0 && relativeX < canvas.width) {
      x = relativeX;
    }
    y = e.clientY;
}


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // USE TO REFRESH EACH PAGE (so it's not a paint job)
    // drawBall();
    ball.draw(ctx);
    // Draw all the Enemies created
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].draw(ctx);
        enemies[i].move();
    }
    displayScore.display(ctx);
    displayLife.display(ctx);

    requestAnimationFrame(draw);
}
