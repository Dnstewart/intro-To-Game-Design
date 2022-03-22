// let projX = 0;
// let projY = 0;
// let projW = 10;
// let projH = 10;
// let projectiles = [];
// //let maxProj = 100;
// let projCnt = 0;
import Component from "../engine/Component.js"
import Constants from "./Constants.js"
// import Time from "../engine/time.js"
// import Input from "../engine/input.js"

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
            Constants.projectiles.shift();
        }

        let j = 0;
        for (let enemy of Constants.enemys){
            if ((this.x >= enemy.x) && (this.x + Constants.projW <= enemy.x + Constants.enemyW) && (this.y <= enemy.y + enemyH)){
                //Constants.enemys.splice(j,1);
                //Constants.projectiles.splice(j,1);
                Constants.score += Constants.enemyScore;
            }
            j++;
        }
    }
}
export default ProjUpdate;