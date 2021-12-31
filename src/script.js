
let clockCanvas = document.getElementById('clockCanvas');
let ctx = clockCanvas.getContext('2d');
let radius = clockCanvas.height/2;

setInterval(drawClock,1000);

function drawClock() {
    drawTime();
    drawNum();
    clockCenter();
}

function clockCenter() {
    ctx.beginPath();
    ctx.arc(radius,radius,3,0,360);
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#fddb3a';
    ctx.fillStyle = '#f6f4e6';
    ctx.stroke();
    ctx.fill();
}

function drawNum() {
    for (let i = 0; i < 12; i++) {
        let angle = (i - 3) * (Math.PI * 2) / 12;
        let length = 85
        ctx.lineWidth = 2;
        ctx.beginPath();

        let x1 = (radius + Math.cos(angle) * length);
        let y1 = (radius + Math.sin(angle) * length);
        let x2 = (radius + Math.cos(angle) * (length - (length / 20)));
        let y2 = (radius + Math.sin(angle) * (length - (length / 20)));

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        ctx.strokeStyle = '#52575d';
        ctx.stroke();
    }
}

function drawTime() {
    const now = new Date();
    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hr = now.getHours();

    ctx.clearRect(0,0,200,200);

    let secToRad = ((Math.PI / 30) * sec) - (0.5 * Math.PI);
    drawSec(ctx,secToRad);

    let hrToRad = ((Math.PI / 6) * hr) - (0.5 * Math.PI);
    drawHand(ctx,hrToRad,8,50,'#52575d');

    let minToRad = ((Math.PI / 30) * min) - (0.5 * Math.PI);
    drawHand(ctx,minToRad,3,80,'#fddb3a');
}

function drawSec(ctx,ang) {
    ctx.beginPath();
    ctx.arc(100,100,95,(-0.5 * Math.PI),ang);
    ctx.lineWidth = 10;
    ctx.lineCap ="round";
    ctx.strokeStyle = '#fddb3a'
    ctx.stroke();
}

function drawHand(ctx,ang,width,length,color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(radius,radius);
    ctx.lineTo(radius + Math.cos(ang) * length,
        radius + Math.sin(ang) * length);
    ctx.stroke();
}


