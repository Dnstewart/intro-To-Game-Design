// let projX = 0;
// let projY = 0;
// let projW = 10;
// let projH = 10;
// let projectiles = [];
// //let maxProj = 100;
// let projCnt = 0;
import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import Collisions from "../engine/Collisions.js";
import Constants from "./Constants.js";
import Time from "../engine/time.js";
import Input from "../engine/input.js";

class HealthDropUpdate extends Component{
    constructor(parent){
        super(parent);
    }
    update() {
        let circle = this.parent.getComponent("Circle");
        if(circle.y < window.innerHeight){
            circle.y += 3;
        }
        else {
            this.parent.markForDelete = true;
        }

    }
}
export default HealthDropUpdate;