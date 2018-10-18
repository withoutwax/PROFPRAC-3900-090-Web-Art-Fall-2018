let canvas, ctx;
let score = 0;
let lives = 3;

// OOP
let ball;
let enemy;
let x, y; // FOR MOUSE CURSOR
let enemyX;
let enemyY;
let noEnemies = 2;
let enemies = [];
let ballRadius = 10;
let enemyRadius = 3;

let displayScore;
let displayLife;

window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("mousemove", mouseMoveHandler, false);

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
    displayScore = new Score(score, "Arial", "16px", "#adadad", 8, 40);
    displayLife = new Lives(score, "Arial", "16px", "#adadad", canvas.width-65, 20)

    // REFRESH FRAMES & DRAW
    let framesPerSecond = 30;
    setInterval(draw, 1000/framesPerSecond);
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

// DISPLAY SCORE
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#adadad";
  ctx.fillText("Score: "+score, 8, 20);
}
// DISPLAY LIVES
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#adadad";
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
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

    // drawScore();
    // drawLives();
    // timer();

    displayScore.display(ctx);
    displayLife.display(ctx);
}
