// let playerX = window.innerWidth * 0.5;
// let playerY = window.innerHeight - 50;
// let playerW = 50;
// let playerH = 50;
// let score = 0;
// let health = 5;

import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import Collisions from "../engine/Collisions.js";
import {getRandomInt} from "../engine/scripts.js";
import Constants from "./Constants.js";
import Time from "../engine/time.js";
import Input from "../engine/input.js";
import ProjGO from "./ProjGO.js";


Input.attach(document);

class PlayerUpdate extends Component{
    constructor(parent){
        super(parent);
    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");
        if (Input.mousePressed){
            Game.scene().gameObjects.push(new ProjGO(rectangle.x + 20, rectangle.y + 10, 5));
            console.log("pew"); //same but fun
            Input.mousePressed = false;
        }

        if (Input.getKey('w')) {
            if (rectangle.y > 0) {
                rectangle.y -= 5;
            }
        }
        if (Input.getKey('s')) {
            if (rectangle.y + rectangle.h < window.innerHeight) {
                rectangle.y += 5;
            }
        }
        if (Input.getKey('a')) {
            if (rectangle.x > 0) {
                rectangle.x -= 5;
            }
        }
        if (Input.getKey('d')) {
            if (rectangle.x + rectangle.w < window.innerWidth) {
                rectangle.x += 5;
            }
        } 

        if(Constants.health < 1){
            this.parent.markForDelete = true;
        }

        
    // if( Math.floor(Time.timePassed * 100) % 1 == 0 && 
    //     Constants.starCnt != Constants.maxstars){
    //     let x = getRandomInt(Constants.starX, window.innerWidth);
    //     Game.scene().back.push(new StarsGO(x, Constants.starY, 2, getRandomInt(0, 255),255, 255));
    //     Constants.starCnt++;
    // }
        
    }
}
export default PlayerUpdate;