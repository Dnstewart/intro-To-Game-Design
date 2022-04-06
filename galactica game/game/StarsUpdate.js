// let starX = 0;
// let starY = 0;
// let starW = 2;
// let starH = 2;
// let stars = [];
// let maxstars = 200;
// let starCnt = 1;
import Component from "../engine/Component.js";
import {getRandomInt} from "../engine/scripts.js";
import Time from "../engine/time.js";
import Game from "../engine/Game.js";
import StarsGO from "./StarsGO.js";
import Constants from "./Constants.js";

class StarsUpdate extends Component{
    constructor(parent){
        super(parent);
    }
    update() {
        let circle = this.parent.getComponent("Circle");
        circle.y += 3.5;
        if(circle.y > window.innerHeight + Constants.starH){
            Game.scene().back.shift();
            Constants.starCnt--;
        }

        // if( Math.floor(Time.timePassed * 100) % 1 == 0 && 
        //     Constants.starCnt != Constants.maxstars){
        //         let x = getRandomInt(Constants.starX, window.innerWidth);
        //         Game.scene().stars.push(new StarsGO(x, Constants.starY, 2, getRandomInt(0, 255),255, 255));
        //         Constants.starCnt++;
        // }
    }
}
export default StarsUpdate;