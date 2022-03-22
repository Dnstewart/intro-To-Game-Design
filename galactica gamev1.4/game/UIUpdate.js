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
        //consolidate the text into one line some how or in the main scene copy these and just input the values
        // ctx.fillText('Time: ' + `${tl}`,Constants.UIX,Constants.UIY);
        // ctx.fillText('Score: ' + `${s}`,Constants.UIX + 150,Constants.UIY);
        // ctx.fillText('Health: ' + `${h}`,Constants.UIX + 300,Constants.UIY);
    }
}
export default UIUpdate;