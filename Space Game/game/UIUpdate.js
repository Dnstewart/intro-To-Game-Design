// let timeLen = 0;
// let timeBool = false;
// let UIX = 50;
// let UIY = 50;
// let txtSize = 25;
import Component from "../engine/Component.js";
import Constants from "./Constants.js";
import Time from "../engine/time.js";

class UIUpdate extends Component{
    constructor(parent){
        super(parent);
        this.time = 0;
    }
    update() {
        this.time += Time.secondsBetweenFrame;
        if (Constants.timeLen + 1 == Math.floor(this.time)){
            Constants.timeBool = true;
        }
        Constants.timeLen = Math.floor(this.time);
        if (Constants.timeBool){
            Constants.score += 10;
            Constants.timeBool = false;
        }
        let s = Constants.score;
        let h = Constants.health; 
        let tl = Math.floor(this.time);
        let out = 'Time: ' + `${tl}` +'   Score: ' + `${s}` + '   Health: ' + `${h}`;
        let text = this.parent.getComponent("Text");
        text.text = out;
    }
}
export default UIUpdate;