import GameObject from "../engine/GameObject.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import PlayerUpdate from "./PlayerUpdate.js"

class PlayerGO extends GameObject{
  constructor(x,y,w,h){
    super();
    this.components.push(new Rectangle(this, x,y,w,h));
    this.components.push(new RectangleDraw(this, "blue", "blue"));
    this.components.push(new PlayerUpdate(this));
  }
}
export default PlayerGO;