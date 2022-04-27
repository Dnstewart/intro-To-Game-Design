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
        // Star spawns
        if( Math.floor(Time.timePassed * 100) % 1 == 0 && 
            Constants.starCnt != Constants.maxstars){
            let x = getRandomInt(Constants.starX, window.innerWidth);
            Game.scene().back.push(new StarsGO(x, Constants.starY, 2.5, getRandomInt(0, 255),255, 255));
            Constants.starCnt++;
        }

        // rock spawns
        if( Constants.updateCnt % 125 == 0 && 
            Constants.rockCnt != Constants.maxRocks){
            let x = getRandomInt(Constants.gameMargins, Constants.cameraDefW + Constants.gameMargins);
            let w = getRandomInt(Constants.rockW, Constants.rockW + 25);
            let h = getRandomInt(Constants.rockH, Constants.rockH + 25);
            Game.scene().gameObjects.push(new RockGO(x, Constants.rockY - h, 
            w, h, 2));
            Constants.rockCnt++;
        }

        //enemy spawns
        if( Constants.updateCnt % 100 == 0 && Constants.enemyCnt != Constants.maxEnemys){
            let x = getRandomInt(Constants.gameMargins, Constants.cameraDefW  + Constants.gameMargins - Constants.enemyW);
            Game.scene().gameObjects.push(new EnemyGO(x, Constants.enemyY - Constants.enemyH, Constants.enemyW, Constants.enemyH));
            Constants.enemyCnt++;
        }

        //heath drop spawns
        if(Constants.updateCnt % 200 == 0){
        //if( Math.ceil(Time.timePassed) % 10 == 0){
            let x = getRandomInt(Constants.gameMargins, Constants.cameraDefW + Constants.gameMargins);
            Game.scene().gameObjects.push(new HealthDropGO(x, 0 - 15, 15));
        }

        // loss Condition
        if(Constants.health < 1){
            Game.changeScene(2);
            Constants.tempArray = Game.scene().back;
        }
        let player = Game.scene().gameObjects[0];
        let healthDrop = Game.findByType("HealthDropGO");
        let enemys = Game.findByType("EnemyGO");
        let projs = Game.findByType("ProjGO");
        let rocks = Game.findByType("RockGO");
        let enmProjs = Game.findByType("EnemyProjGO");
        for(let h of healthDrop) {
            let circle = h.getComponent("Circle");
            let play = player.getComponent("Rectangle");
            if(Collisions.inCollision(play, circle)) {
                Constants.health++;
                h.markForDelete = true;
            }
        }

        for(let h of enemys) {
            let enemy = h.getComponent("Rectangle");
            let play = player.getComponent("Rectangle");
            if(Collisions.inCollision(play, enemy)) {
                Constants.health--;
                h.markForDelete = true;
            }
            for(let p of projs){
                let circle = p.getComponent("Circle");
                if(Collisions.inCollision(circle, enemy)) {
                    p.markForDelete = true;
                    h.markForDelete = true;
                    Constants.score += 200;
                }
            }
        }

        for(let h of rocks) {
            let rock = h.getComponent("Rectangle");
            let ver = h.getComponent("RockUpdate").version;
            let play = player.getComponent("Rectangle");
            if(Collisions.inCollision(play, rock)) {
                Constants.health--;
                h.markForDelete = true;
            }
            
            /*
            for(let p of projs){
                let circle = p.getComponent("Circle");
                if(Collisions.inCollision(circle, rock)) {
                    p.markForDelete = true;
                    h.markForDelete = true;
                    if(ver == 2){
                        Game.scene().gameObjects.push(new RockGO(rock.x, rock.y, rock.w / 2, rock.h / 2, 1));
                        Game.scene().gameObjects.push(new RockGO(rock.x, rock.y, rock.w / 2, rock.h / 2, 0));
                        Constants.score += 100;
                    }
                    else {
                        Constants.score += 50;
                    }
                }
            }*/
        }

        /*
        for(let h of enmProjs) {
            let circle = h.getComponent("Circle");
            let play = player.getComponent("Rectangle");
            if(Collisions.inCollision(play, circle)) {
                Constants.health--;
                h.markForDelete = true;
            }
        }
        */

        Constants.updateCnt++;
    }
}
export default Spawner;