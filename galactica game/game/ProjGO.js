import GameObject from "../engine/GameObject.js";
import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";
import ProjUpdate from "./ProjUpdate.js"

class ProjGO extends GameObject{
  constructor(x,y,r){
    super("ProjGO");
    this.components.push(new Circle(this, x,y,r));
    this.components.push(new CircleDraw(this, "lime", "lime"));
    this.components.push(new ProjUpdate(this));
  }
}
export default ProjGO;