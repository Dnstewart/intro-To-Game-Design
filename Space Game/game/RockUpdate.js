import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import {getRandomInt} from "../engine/scripts.js";
import Time from "../engine/time.js";
import Game from "../engine/Game.js";
import RockGO from "./RockGO.js";

class RockUpdate extends Component{
    constructor(parent, ver){
        super(parent);
        this.version = ver;
    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");
        if(this.version == 2){
            rectangle.y += .75 + (Constants.updateCnt * 0.0005);
            if(rectangle.y > window.innerHeight){
                this.parent.markForDelete = true;
                Constants.rockCnt--;
            }
        }
        else if(this.version == 1){
            rectangle.x -= .15 + (Constants.updateCnt * 0.0005);
            rectangle.y += 2 + (Constants.updateCnt * 0.0005);
            if(rectangle.y > window.innerHeight || rectangle.x < 0 - rectangle.w - 1){
                this.parent.markForDelete = true;
                Constants.rockCnt--;
            }
        }
        else{
            rectangle.x += .15 + (Constants.updateCnt * 0.0005);
            rectangle.y += 2 + (Constants.updateCnt * 0.0005);
            if(rectangle.y > window.innerHeight || rectangle.x > window.innerWidth + 1){
                this.parent.markForDelete = true;
                Constants.rockCnt--;
            }
        }

    }
   
}
export default RockUpdate;