
import GameObject from "../engine/GameObject.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import StarsUpdate from "./StarsUpdate.js"
import StarsDraw from "./StarsDraw.js"//remove

class StarsGO extends GameObject{
    constructor(x,y,w,h,r,g,b){
        super();
        this.components.push(new StarsUpdate(this,x,y,w,h,r,g,b));
        this.components.push(new StarsDraw(this));
    }
    update(){
      this.components.filter(c=>c.update).forEach(c=>c.update());
    }
    draw(ctx){
      this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
    }
    /*
  constructor(x,y,w,h,r,g,b){
    super();
    this.components.push(new Rectangle(this, x,y,w,h));
    this.components.push(new RectangleDraw(this, `rgb(${r},${g},${b})`, 
    `rgb(${r},${g},${b})`));
    this.components.push(new StarsUpdate(this));
  }*/
}
export default StarsGO;