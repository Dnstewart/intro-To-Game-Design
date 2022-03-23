
import GameObject from "../engine/GameObject.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import PlayerUpdate from "./PlayerUpdate.js"
import PlayerDraw from "./PlayerDraw.js"//remove

class PlayerGO extends GameObject{
    constructor(x,y,w,h,r,g,b){
        super();
        this.components.push(new PlayerUpdate(this,x,y,w,h,r,g,b));
        this.components.push(new PlayerDraw(this));
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
      }
      draw(ctx){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
      }
  /*
  constructor(x,y,w,h){
    super();
    this.components.push(new Rectangle(this, x,y,w,h));
    this.components.push(new RectangleDraw(this, "cyan", "cyan"));
    this.components.push(new PlayerUpdate(this));
  }*/
}
export default PlayerGO;