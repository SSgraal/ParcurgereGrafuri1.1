const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const repeatButton = document.getElementById("repeat");
window.onscroll = function(){stickyNavBar()};
var navbar = document.getElementById("topnav");
var sticky = navbar.offsetTop;
var rad = 25; 
var x1;
var x2;
var x3;
var x4;
var x5;
var y1;
var y2;
var y3;
var y4;
var y5;
var currentColor = "#ff0000";
var visitedColor = "#f08080";

repeatButton.addEventListener('click', parcurgereInLatime);
parcurgereInLatime();

function stickyNavBar(){
    if(window.pageYOffset >= sticky)
    {
        navbar.classList.add("sticky");
    }else
    {
        navbar.classList.remove("sticky");
    }
}
function drawCircle(x, y, rad)
{
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI);
    ctx.stroke();
}
function drawLine(startX, startY, endX, endY)
{
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}
function textNumber(text, x, y)
{
    ctx.font = "30px Arial";
    ctx.fillStyle = "black"
    ctx.fillText(text, x, y);
}
function drawGraph()
{
    //Numere Noduri
        textNumber("1", 80, 100);
        textNumber("2", 80, 210);
        textNumber("3", 290, 110);
        textNumber("4", 340, 260);
        textNumber("5", 190, 260);
            
    //Nodurile
        drawCircle(90, 90, rad);//1
        x1 = 90;
        y1 = 90;
        drawCircle(90, 200, rad);//2
        x2 = 90;
        y2 = 200;
        drawCircle(300, 100, rad);//3
        x3 = 300;
        y3 = 100;
        drawCircle(350, 250, rad);//4
        x4 = 350;
        y4 = 250;
        drawCircle(200, 250, rad);//5
        x5 = 200;
        y5 = 250;
            
    //Muchiile
        drawLine(90, 114, 90, 175);//1,2
        drawLine(114, 90, 275, 100);//1,3
        drawLine(300, 125, 200, 225);//3,5
        drawLine(115, 200, 325, 250);//2,4
}
function coloredCircles(x, y, rad, color, text)
{
    drawCircle(x, y, rad);
    ctx.fillStyle = color;
    ctx.fill();
    textNumber(text, x-10, y+10);
}

function parcurgereInLatime()
{
    drawGraph();
    setTimeout(coloredCircles, 1000, x1, y1, rad, currentColor, "1")
    setTimeout(coloredCircles, 2000, x2, y2, rad, visitedColor, "2");
    setTimeout(coloredCircles, 3000, x3, y3, rad, visitedColor, "3");
    setTimeout(coloredCircles, 4000, x1, y1, rad, visitedColor, "1");
    setTimeout(coloredCircles, 4000, x2, y2, rad, currentColor, "2");
    setTimeout(coloredCircles, 5000, x4, y4, rad, visitedColor, "4");
    setTimeout(coloredCircles, 6000, x2, y2, rad, visitedColor, "2");
    setTimeout(coloredCircles, 6000, x3, y3, rad, currentColor, "3");
    setTimeout(coloredCircles, 7000, x5, y5, rad, visitedColor, "5");
    setTimeout(coloredCircles, 8000, x3, y3, rad, visitedColor, '3');
}