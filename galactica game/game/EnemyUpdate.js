// let enemyX = 0;
// let enemyY = 0;
// let enemyW = 25;
// let enemyH = 25;
// let enemys = [];
// let maxEnemys = 20;
// let enemyCnt = 1;
// let enemyScore = 100;
import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import Constants from "./Constants.js";

class EnemyUpdate extends Component{
    constructor(parent){
        super(parent);
    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");
        rectangle.y += 1.25;
        if(rectangle.y > window.innerHeight){
            this.parent.markForDelete = true;
            Constants.health--;
            Constants.enemyCnt--;
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
                Constants.score += 200;
                this.parent.markForDelete = true;
                proj[i].markForDelete = true;//undefined
                break;
            }
            i++;
        }
    }
}
export default EnemyUpdate;