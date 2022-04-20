// let rockX = 0;
// let rockY = 0;
// let rockW = 25;
// let rockH = 25;
// let rocks = [];
// let maxRocks = 20;
// let rockCnt = 1;
// let rockScore = 100;

// idea: make the rocks explode into two versions that are half the size and 
// make the half size rock be destroyed in one hit.

import Component from "../engine/Component.js"
import Constants from "./Constants.js"
import {getRandomInt} from "../engine/scripts.js";
import Time from "../engine/time.js";
import Game from "../engine/Game.js";
import RockGO from "./RockGO.js";

class RockUpdate extends Component{
    constructor(parent, ver){
        super(parent);
        this.version = ver;
    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");
        if(this.version == 2){
            rectangle.y += .75;
            if(rectangle.y > window.innerHeight){
                this.parent.markForDelete = true;
                Constants.rockCnt--;
            }
            //split rock/asteroid into 2
        }
        else if(this.version == 1){
            rectangle.x -= .25;
            rectangle.y += 1;
            if(rectangle.y > window.innerHeight || rectangle.x < 0 - rectangle.w - 1){
                this.parent.markForDelete = true;
                Constants.rockCnt--;
            }
        }
        else{
            rectangle.x += .25;
            rectangle.y += 1;
            if(rectangle.y > window.innerHeight || rectangle.x > window.innerWidth + 1){
                this.parent.markForDelete = true;
                Constants.rockCnt--;
            }
        }
        let proj = Game.findByType("ProjGO");
        let i = 0;
        for (let p of proj){
            let circle = p.getComponent("Circle");
            let w = rectangle.w + circle.r;
            let h = rectangle.h + circle.r;
            let x = rectangle.x - circle.r;
            let y = rectangle.y - circle.r;
            if(circle.x > x && circle.y > y && circle.x < x + w && circle.y < y + h){
                this.parent.markForDelete = true;
                proj[i].markForDelete = true;//undefined
                if(this.version == 2){
                    Constants.score += 100;
                    Game.scene().gameObjects.push(new RockGO(rectangle.x, rectangle.y, rectangle.w / 2, rectangle.h / 2, 1));
                    Game.scene().gameObjects.push(new RockGO(rectangle.x, rectangle.y, rectangle.w / 2, rectangle.h / 2, 0));
                }
                else{
                    Constants.score += 50;
                }
                break;
            }
            i++;
        }

    }
   
}
export default RockUpdate;