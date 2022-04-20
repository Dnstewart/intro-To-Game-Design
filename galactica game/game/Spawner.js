import Component from "../engine/Component.js";
import Time from "../engine/Time.js";
import Game from "../engine/Game.js";
import Constants from "./Constants.js";
import {getRandomInt} from "../engine/scripts.js";
import Input from "../engine/Input.js";
import Collisions from "../engine/Collisions.js";
//import ProjGO from "./ProjGO.js";
import EnemyGO from "./EnemyGO.js";
import RockGO from "./RockGO.js";
import StarsGO from "./StarsGO.js";
import HealthDropGO from "./HealthDropGO.js";
import MathPoint from "../engine/math/Point.js";
import MathLine from "../engine/math/Line.js";

class Spawner extends Component {
    constructor(parent){
        super(parent);
    }
    update() {
        // stops spawning rocks after
        if( Math.floor(Time.timePassed * 100) % 1 == 0 && 
            Constants.starCnt != Constants.maxstars){
            let x = getRandomInt(Constants.starX, window.innerWidth);
            Game.scene().back.push(new StarsGO(x, Constants.starY, 2.5, getRandomInt(0, 255),255, 255));
            Constants.starCnt++;
        }
        if( Constants.updateCnt % 125 == 0 && 
            Constants.rockCnt != Constants.maxRocks){
            let x = getRandomInt(Constants.rockX, window.innerWidth);
            let w = getRandomInt(Constants.rockW, Constants.rockW + 25);
            let h = getRandomInt(Constants.rockH, Constants.rockH + 25);
            Game.scene().gameObjects.push(new RockGO(x, Constants.rockY - h, 
            w, h, 2));
            Constants.rockCnt++;
        }
        if( Constants.updateCnt % 100 == 0 && Constants.enemyCnt != Constants.maxEnemys){
            let x = getRandomInt(5, window.innerWidth - (Constants.enemyW + 5));
            Game.scene().gameObjects.push(new EnemyGO(x, Constants.enemyY - Constants.enemyH, Constants.enemyW, Constants.enemyH));
            Constants.enemyCnt++;
        }
        if( Constants.updateCnt % 100 == 0){
            let x = getRandomInt(150, Constants.cameraDefW);
            Game.scene().gameObjects.push(new HealthDropGO(x, 0 - 15, 15));
        }
        if(Constants.health < 1){
            Game.changeScene(2);
            Constants.tempArray = Game.scene().back;
        }
        let player = Game.scene().gameObjects[0]; //Game.findByType("PlayerGo");
        let healthDrop = Game.findByType("HealthDropGO");
        let enemys = Game.findByType("EnemyGO");
        let projs = Game.findByType("ProjGO");
        let rocks = Game.findByType("RockGO");
        let enmProjs = Game.findByType("EnemyProjGO");
        for(let h of healthDrop) {
            let circle = h.getComponent("Circle");
            let rect = player.getComponent("Rectangle");
            if(Collisions.inCollision(rect, circle)) {
                Constants.health++;
                h.markForDelete = true;
            }
        }

        Constants.updateCnt++;
    }
}
export default Spawner;