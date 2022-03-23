
import GameObject from "../engine/GameObject.js";
import Circle from "../engine/Circle.js";
import CircleDraw from "../engine/CircleDraw.js";
import ProjUpdate from "./ProjUpdate.js"
import ProjDraw from "./ProjDraw.js"//remove

class ProjGO extends GameObject{
    constructor(x,y,w,h,r,g,b){
        super();
        this.components.push(new ProjUpdate(this,x,y,w,h,r,g,b));
        this.components.push(new ProjDraw(this));
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
      }
      draw(ctx){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
      }
  /*
  constructor(x,y,r,fil,stk){
    super();
    this.components.push(new Circle(this, x,y,r));
    this.components.push(new CircleDraw(this, fil, stk);
    this.components.push(new ProjUpdate(this));
  }*/
}
export default ProjGO;