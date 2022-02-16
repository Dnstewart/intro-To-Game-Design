document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("click", mousePress);
document.addEventListener("keyup", keyCheckUp);
document.addEventListener("keydown", keyCheckDown);

let mouseIsDown = false;
let mousePressed = false;
let up = false;
let down = false;
let left = false;
let right = false;

function mouseDown() {
    mouseIsDown = true;
}
function mouseUp() {
    mouseIsDown = false;
}
function mousePress(){
    mousePressed = true;
}
function keyCheckDown(e) {
    if (e.code == "ArrowUp" || e.code == "KeyW")
    {
        up = true;
    }
    else if (e.code == "ArrowDown" || e.code == "KeyS")
    {
        down = true;
    }
    else if (e.code == "ArrowLeft" || e.code == "KeyA")
    {
        left = true;
    }
    else if (e.code == "ArrowRight" || e.code == "KeyD")
    {
        right = true;
    }
}
function keyCheckUp(e) {
    up = false;
    down = false;
    left = false;
    right = false;
}