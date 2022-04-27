import Component from "../engine/Component.js";
import Collisions from "../engine/Collisions.js";
import Constants from "./Constants.js";
import Time from "../engine/time.js";
import Input from "../engine/input.js";

class ProjUpdate extends Component{
    constructor(parent){
        super(parent);
        this.bool = true;
    }
    update() {
        let circle = this.parent.getComponent("Circle");
        if(this.bool){
            circle.y -= 10;
            if (circle.y + 5 < 0) {
                this.bool = false;
            }
        }
        else {
            this.parent.markForDelete = true;
        }
    }
}
export default ProjUpdate;