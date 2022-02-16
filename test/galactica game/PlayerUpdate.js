let playerX = window.innerWidth * 0.5;
let playerY = window.innerHeight - 50;
let playerW = 50;
let playerH = 50;
let score = 0;
let health = 5;

class PlayerUpdate extends Component{
    constructor(parent,x,y,w,h,r,g,b){
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    update() {
        if (mousePressed){
            projectiles.push(new ProjGO(this.x + 20,this.y + 10,projW,projH,0,255,150));
            projCnt++;
            mousePressed = false;
        }

        if (up) {
            if (this.y > 0) {
                this.y -= 5;
            }
            else {
                console.log("Top boundry reached.\n" + `${this.y}`);
            }
        }
        if (down) {
            if (this.y + this.h < window.innerHeight) {
                this.y += 5;
            }
            else {
                console.log("Bottom boundry reached.\n");
            }
        }
        if (left) {
            if (this.x > 0) {
                this.x -= 5;
            }
            else {
                console.log("Left boundry reached.\n");
            }
        }
        if (right) {
            if (this.x + this.w < window.innerWidth) {
                this.x += 5;
            }
            else {
                console.log("Right boundry reached.\n");
            }
        }
    }
}