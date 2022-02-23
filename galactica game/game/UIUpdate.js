// let timeLen = 0;
// let timeBool = false;
// let UIX = 50;
// let UIY = 50;
// let txtSize = 25;
import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import Time from "../engine/time.js"
//import Input from "../engine/input.js"


class UIUpdate extends Component{
    constructor(parent, s, tl, h){
        super(parent);
        this.s = s;
        this.tl = tl;
        this.h = h;
    }
    update() {
        if (Constants.timeLen + 1 == Math.floor(Time.timePassed)){
            Constants.timeBool = true;
        }
        Constants.timeLen = Math.floor(Time.timePassed);
        this.tl = Math.floor(Time.timePassed);
        if (Constants.timeBool){
            Constants.score += 10;
            Constants.timeBool = false;
        }
        this.s = Constants.score;
        this.h = Constants.health;
    }
}
export default UIUpdate;