let starX = 0;
let starY = 0;
let starW = 2;
let starH = 2;
let stars = [];
let maxstars = 200;
let starCnt = 1;


class StarsUpdate extends Component{
    constructor(parent,x,y,w,h){
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    update() {
        this.y += 5;
        if(this.y > window.innerHeight + 8){
           stars.shift(); 
           starCnt--;
        }
    }
}