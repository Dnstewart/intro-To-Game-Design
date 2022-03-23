// let timeLen = 0;
// let timeBool = false;
// let UIX = 50;
// let UIY = 50;
// let txtSize = 25;
import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import Time from "../engine/time.js"

class UIUpdate extends Component{
    constructor(parent){
        super(parent);
    }
    update() {
        if (Constants.timeLen + 1 == Math.floor(Time.timePassed)){
            Constants.timeBool = true;
        }
        Constants.timeLen = Math.floor(Time.timePassed);
        let tl = Math.floor(Time.timePassed);
        if (Constants.timeBool){
            Constants.score += 10;
            Constants.timeBool = false;
        }
        let s = Constants.score;
        let h = Constants.health; 
        let out = 'Time: ' + `${tl}` +' Score: ' + `${s}` + ' Health: ' + `${h}`;
        //let text = this.parent.getComponent("Text");
        //text.text = out; remove slashes
    }
}
export default UIUpdate;