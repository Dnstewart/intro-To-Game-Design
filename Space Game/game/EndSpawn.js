import Component from "../engine/Component.js";
import Time from "../engine/Time.js";
import Game from "../engine/Game.js";
import Constants from "./Constants.js";
import {getRandomInt} from "../engine/scripts.js";
import Input from "../engine/Input.js";
import Collisions from "../engine/Collisions.js";
import EnemyGO from "./EnemyGO.js";
import RockGO from "./RockGO.js";
import StarsGO from "./StarsGO.js";
import UIGO from "./UIGO.js";
import MathPoint from "../engine/math/Point.js";
import MathLine from "../engine/math/Line.js";

class EndSpawn extends Component {
    constructor(parent){
        super(parent);
    }
    update() {
        if( Math.floor(Time.timePassed * 100) % 1 == 0 && 
            Constants.starCnt != Constants.maxstars){
            let x = getRandomInt(Constants.starX, window.innerWidth);
            Game.scene().back.push(new StarsGO(x, Constants.starY, 2.5, getRandomInt(0, 255),255, 255));
            Constants.starCnt++;
        }
    }
}
export default EndSpawn;