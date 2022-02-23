// let enemyX = 0;
// let enemyY = 0;
// let enemyW = 25;
// let enemyH = 25;
// let enemys = [];
// let maxEnemys = 20;
// let enemyCnt = 1;
// let enemyScore = 100;
import Component from "../engine/Component.js"
import Constants from "./Constants.js"
// import Time from "../engine/time.js"
// import Input from "../engine/input.js"

class EnemyUpdate extends Component{
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
        this.y += 1;
        if(this.y > window.innerHeight){
            Constants.enemys.shift(); 
            Constants.enemyCnt--;
        }
    }
}
export default EnemyUpdate;