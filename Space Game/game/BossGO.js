import GameObject from "../engine/GameObject.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import BossUpdate from "./BossUpdate.js";

class BossGO extends GameObject{
  constructor(x,y,w,h){
    super("BossGO");
    this.components.push(new Rectangle(this, x,y,w,h));
    this.components.push(new RectangleDraw(this, "red", "red"));
    this.components.push(new BossUpdate(this));
  }
}
export default BossGO;