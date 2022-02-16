let projX = 0;
let projY = 0;
let projW = 10;
let projH = 10;
let projectiles = [];
//let maxProj = 100;
let projCnt = 0;


class ProjUpdate extends Component{
    constructor(parent,x,y,w,h,r,g,b){
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
        this.bool = true;
    }
    update() {
        if(this.bool){
            this.y -= 10;
            if (this.y + 10 < 0) {
                this.bool = false;
            }
        }
        else{
            projectiles.shift();
        }
    }
}