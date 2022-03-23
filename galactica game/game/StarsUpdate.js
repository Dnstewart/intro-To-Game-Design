// let starX = 0;
// let starY = 0;
// let starW = 2;
// let starH = 2;
// let stars = [];
// let maxstars = 200;
// let starCnt = 1;
import Component from "../engine/Component.js"
//import scripts from "../engine/scripts.js";
//import Time from "../engine/time.js"
//import Game from "../engine/Game.js"
//import StarsGO from "./StarsGO.js"
import Constants from "./Constants.js"

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
        if(this.y > window.innerHeight + Constants.starH){
            Constants.stars.shift(); 
           Constants.starCnt--;
        }

        // if( Math.floor(Time.timePassed * 100) % 1 == 0 && 
        //     Constants.starCnt != Constants.maxstars){
        //         let x = getRandomInt(Constants.starX, window.innerWidth);
        //         Game.scene().gameObjects.push(new StarsGO(x, Constants.starY, Constants.starW, Constants.starH));
        //         Constants.starCnt++;
        // }
    }
}
export default StarsUpdate;