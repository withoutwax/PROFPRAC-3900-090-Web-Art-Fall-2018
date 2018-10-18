let canvas, ctx;
let score = 0;
let lives = 3;

// OOP
let ball;
let enemy;
let x, y; // FOR MOUSE CURSOR
let enemyX, enemyY; // FOR ENEMY
let noEnemies = 2;
let enemies = [];
let ballRadius = 10;
let enemyRadius = 3;


window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    enemyX = canvas.width/2;
    enemyY = canvas.height/2;

    canvas.addEventListener("mousemove", mouseMoveHandler, false);

    ball = new Ball(x, y, ballRadius);

    // Create Multiple incidence of Enemies
    for (let i = 0; i < noEnemies; i++) {
        enemy = new Enemies(enemyX, enemyY, 4, enemyRadius);
        enemies.push(enemy);
    }

    console.log(enemy.console());

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

// DRAWING THE BALL OF THE ENEMY
function drawEnemyBall() {
    ctx.beginPath();
    ctx.arc(enemyX, enemyY, enemyRadius, 0, Math.PI*2);
    ctx.fillStyle = "#3d3d3d";
    ctx.fill();
    ctx.closePath();

    // MAKING SURE THE ENEMY BALL STAY WITHIN THE CANVAS
    if(enemyX + dx > canvas.width-enemyRadius || enemyX + dx < enemyRadius) {
      dx = -dx;
    }
    if(enemyY + dy > canvas.height-enemyRadius || enemyY + dy < enemyRadius) {
      dy = -dy;
    } else {
        // COLLISION DETECTION
        if ((enemyX + enemyRadius/2) > (x - ballRadius/2) && (enemyX - enemyRadius/2) < (x + ballRadius/2) && (enemyY + enemyRadius) > (y - ballRadius/2) && (enemyY - enemyRadius/2) < (y + ballRadius/2)) {
            // alert("You died!");
            console.log("Collision Detected!");
        }
    }
    enemyX += dx;
    enemyY += dy;
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

// CONFIGURE TIMER FUNCTION (FOR SCORE)
function add() {
    score += 1;
}
function timer() {
    score = setTimeout(add, 1000);
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
    // enemy.draw(ctx);
    // enemy.move();
    drawScore();
    drawLives();
    timer();
    // requestAnimationFrame(draw);
}
