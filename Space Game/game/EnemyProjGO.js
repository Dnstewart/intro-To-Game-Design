import GameObject from "../engine/GameObject.js";
import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";
import EnemyProjUpdate from "./EnemyProjUpdate.js"

class EnemyProjGO extends GameObject{
  constructor(x,y,r){
    super("ProjGO");
    this.components.push(new Circle(this, x,y,r));
    this.components.push(new CircleDraw(this, "red", "white"));
    this.components.push(new EnemyProjUpdate(this));
  }
}
export default EnemyProjGO;