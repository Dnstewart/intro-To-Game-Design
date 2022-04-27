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
import EnemyProjGO from "./EnemyProjGO.js";

class EnemyUpdate extends Component{
    constructor(parent){
        super(parent);
    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");
        rectangle.y += 1.25 + (Constants.updateCnt * 0.0005);
        if(rectangle.y > window.innerHeight){
            this.parent.markForDelete = true;
            Constants.health--;
            Constants.enemyCnt--;
        }

        if (Constants.updateCnt % 250 == 0){
            Game.scene().gameObjects.push(new EnemyProjGO(rectangle.x + 20, rectangle.y + 10, 10));
        }
    }
}
export default EnemyUpdate;