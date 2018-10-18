let canvas, ctx;
let ballRadius = 10;
let enemyRadius = 3;
let score = 0;
let lives = 3;
let x, y; // FOR MOUSE CURSOR
let enemyX, enemyY; // FOR ENEMY
let noEnemies = 2;
let dx = 4; // Enemy Ball Speed x-axis
let dy = -4; // Enemy Ball Speed y-axis

window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    enemyX = canvas.width/2;
    enemyY = canvas.height/2;

    let framesPerSecond = 30;
    setInterval(draw, 1000/framesPerSecond);

    canvas.addEventListener("mousemove", mouseMoveHandler, false);
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

// DRAWING THE BALL ON CURSOR
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#3d3d3d";
    ctx.fill();
    ctx.closePath();
}

// DRAWING THE BALL OF THE ENEMY
function drawEnemyBall(randomX, randomY) {
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
    drawBall();

    for (let i = 0; i < noEnemies; i++) {
        let randomX = 1;
        let randomY = Math.floor(Math.random() * 2);
        drawEnemyBall(randomX, randomY);
    }

    drawScore();
    drawLives();
    timer();

    // requestAnimationFrame(draw);
}
