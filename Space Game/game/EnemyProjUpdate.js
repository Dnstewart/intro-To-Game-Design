import Component from "../engine/Component.js";
import Collisions from "../engine/Collisions.js";
import Constants from "./Constants.js";
import Time from "../engine/time.js";
import Input from "../engine/input.js";

class EnemyProjUpdate extends Component{
    constructor(parent){
        super(parent);
        this.bool = true;
    }
    update() {
        let circle = this.parent.getComponent("Circle");
        if(this.bool){
            circle.y += 5 + (Constants.updateCnt * 0.0005);
            if (circle.y - 5 > window.innerHeight) {
                this.bool = false;
            }
        }
        else {
            this.parent.markForDelete = true;
        }
    }
}
export default EnemyProjUpdate;