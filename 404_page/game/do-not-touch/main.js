let canvas, ctx;
let ballRadius = 10;
let enemyRadius = 3;
let score = 0;
let lives = 3;

window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    let framesPerSecond = 30;
    setInterval(draw, 1000/framesPerSecond);

    canvas.addEventListener("mousemove", mouseMoveHandler, false);
}

// CONFIGURING THE MOUSE MOVEMENT
let x, y;
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
    drawScore();
    drawLives();
    timer();

    // requestAnimationFrame(draw);
}
