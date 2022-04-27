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
    }
}
export default EnemyUpdate;