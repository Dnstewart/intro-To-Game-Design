import GameObject from "../engine/GameObject.js"
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import RockUpdate from "./RockUpdate.js"


class RockGO extends GameObject{
  constructor(x,y,w,h, ver){
    super("RockGO");
    this.components.push(new Rectangle(this, x,y,w,h));
    this.components.push(new RectangleDraw(this, "brown", "red"));
    this.components.push(new RockUpdate(this, ver));
  }
}
export default RockGO;