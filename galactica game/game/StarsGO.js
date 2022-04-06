import GameObject from "../engine/GameObject.js";
import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";
import StarsUpdate from "./StarsUpdate.js"

class StarsGO extends GameObject{
  constructor(x,y,r,red,g,b){
    super();
    this.components.push(new Circle(this, x,y,r));
    this.components.push(new CircleDraw(this, `rgb(${red},${g},${b})`, `rgb(${red},${g},${b})`));
    this.components.push(new StarsUpdate(this));
  }
}
export default StarsGO;