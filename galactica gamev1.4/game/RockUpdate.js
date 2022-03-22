// let rockX = 0;
// let rockY = 0;
// let rockW = 25;
// let rockH = 25;
// let rocks = [];
// let maxRocks = 20;
// let rockCnt = 1;
// let rockScore = 100;
import Component from "../engine/Component.js"
import Constants from "./Constants.js"
// import Time from "../engine/time.js"
// import Input from "../engine/input.js"

class RockUpdate extends Component{
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
        this.y += 2;
        if(this.y > window.innerHeight){
            Constants.rocks.shift(); 
            Constants.rockCnt--;
        }
    }
}
export default RockUpdate;