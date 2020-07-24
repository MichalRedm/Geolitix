class Line {
    constructor(A, B, C) {
        this.A = A;
        this.B = B;
        this.C = C;
    }
    perpendicular(point) {

    }
}

class Point {
    constructor(X, Y) {
        this.X = X;
        this.Y = Y;
    }
}

class AlgEx {
    constructor() {

    }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var zoom = 100;

resize();
window.onresize = resize;

function draw() {
    drawLine(new Line(1, 0, 0), "lime");
    drawLine(new Line(0, 1, 0), "lime");
    drawLine(new Line(1, 2, 3), "red");
}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    draw();
}

function drawLine(line, color) {
    var A = line.A, B = line.B, C = line.C;
    color = color || "#000000";
    ctx.beginPath();
    if (B !== 0) {
        var a = A / B, b = C / B;
        ctx.moveTo(0, -canvas.width/2 * a + b * zoom + canvas.height/2);
        ctx.lineTo(canvas.width, canvas.width/2 * a + b * zoom + canvas.height/2);
    } else if (A !== 0) {
        var x = -C / A;
        ctx.moveTo(canvas.width/2 + x * zoom, 0);
        ctx.lineTo(canvas.width/2 + x * zoom, canvas.height);
    } else {
        console.log("Invalid line equation.");
    }
    ctx.strokeStyle = color;
    ctx.stroke();
}