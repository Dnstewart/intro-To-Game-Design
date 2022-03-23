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
//import scripts from "../engine/scripts.js";
// import Time from "../engine/time.js";
//import Game from "../engine/Game.js";
//import EnemyGO from "./EnemyGO.js";

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

        // if( Constants.updateCnt % 125 == 0 && Constants.enemyCnt != Constants.maxEnemys){
        //     let x = getRandomInt(5, window.innerWidth - (Constants.enemyW + 5));
        //     let r = 255;
        //     let g = 0;
        //     let b = 0;
        //     Game.scene().gameObjects.push(new EnemyGO(x, Constants.enemyY, Constants.enemyW, Constants.enemyH, r, g, b));
        //     Constants.enemyCnt++;
        // }
    }
}
export default EnemyUpdate;