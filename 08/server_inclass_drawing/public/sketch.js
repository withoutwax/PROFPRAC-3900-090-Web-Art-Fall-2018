let socket;
let red;
let green;
let blue;

function setup() {
	socket = io.connect('http://localhost:3000');
	socket.on('mouse', newDrawing);

	createCanvas(800, 800);

	background(20);
}

function draw() {

}

function mouseDragged() {
	let data = {
		x : mouseX,
		y : mouseY,
		r : red,
		g : green,
		b : blue
	}

	socket.emit('mouse', data);
	console.log('Sending: ' + data.x + ' ' + data.y);

	noStroke();
	fill(red, green, blue);
	ellipse(mouseX, mouseY, 15);

}

function newDrawing(data) {
	noStroke();
	fill(data.r, data.g, data.b);
	ellipse(data.x, data.y , 15);
}
