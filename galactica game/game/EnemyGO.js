import GameObject from "../engine/GameObject.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import EnemyUpdate from "./EnemyUpdate.js";

class EnemyGO extends GameObject{
  constructor(x,y,w,h){
    super();
    this.components.push(new Rectangle(this, x,y,w,h));
    this.components.push(new RectangleDraw(this, "red", "red"));
    this.components.push(new EnemyUpdate(this));
  }
}
export default EnemyGO;