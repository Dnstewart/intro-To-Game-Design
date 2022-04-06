// let rockX = 0;
// let rockY = 0;
// let rockW = 25;
// let rockH = 25;
// let rocks = [];
// let maxRocks = 20;
// let rockCnt = 1;
// let rockScore = 100;

// idea: make the rocks explode into two versions that are half the size and 
// make the half size rock be destroyed in one hit.

import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import {getRandomInt} from "../engine/scripts.js";
import Time from "../engine/time.js";
import Game from "../engine/Game.js";
import RockGO from "./RockGO.js";

class RockUpdate extends Component{
    constructor(parent){
        super(parent);
    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");
        rectangle.y += .75;
        if(rectangle.y > window.innerHeight){
            this.parent.markForDelete = true;
            Constants.rockCnt--;
        } 
        // if( Math.floor(Time.timePassed * 100) % 100 == 0 && 
        // Constants.rockCnt != Constants.maxrocks){
        //     let x = getRandomInt(Constants.rockX, window.innerWidth);
        //     Game.scene().gameObjects.push(new RockGO(x, Constants.rockY, 
        //     getRandomInt(Constants.rockW, Constants.rockW + 25), getRandomInt(Constants.rockH, Constants.rockH + 25)));
        //     Constants.rockCnt++;
        // }
    }
   
}
export default RockUpdate;