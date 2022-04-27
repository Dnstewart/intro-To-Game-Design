import Component from "../engine/Component.js";
import Game from "../engine/Game.js";
import Constants from "./Constants.js";
import EnemyProjGO from "./EnemyProjGO.js";

class BossUpdate extends Component{
    constructor(parent){
        super(parent);
        this.bossHealth = 20;
    }
    update() {
        let rectangle = this.parent.getComponent("Rectangle");
        rectangle.y += .5 + (Constants.updateCnt * 0.0005);
        if(rectangle.y > window.innerHeight){
            this.parent.markForDelete = true;
            Constants.health = 0;
        }

        if (Constants.updateCnt % 250 == 0){
            Game.scene().gameObjects.push(new EnemyProjGO(rectangle.x + 20, rectangle.y + 10, 10));
        }
    }
}
export default BossUpdate;