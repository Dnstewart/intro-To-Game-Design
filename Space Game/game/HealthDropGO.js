import GameObject from "../engine/GameObject.js";
import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";
import HealthDropUpdate from "./HealthDropUpdate.js"

class HealthDropGO extends GameObject{
  constructor(x,y,r){
    super("HealthDropGO");
    this.components.push(new Circle(this, x,y,r));
    this.components.push(new CircleDraw(this, "white", "red"));
    this.components.push(new HealthDropUpdate(this));
  }
}
export default HealthDropGO;