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
        if(circle.y > window.innerHeight + circle.r){
            Game.scene().back.shift();
            Constants.starCnt--;
        }
    }
}
export default StarsUpdate;