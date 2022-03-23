import GameObject from "../engine/GameObject.js";
import Rectangle from "../engine/Rectangle.js";
import RectangleDraw from "../engine/RectangleDraw.js";
import EnemyUpdate from "./EnemyUpdate.js";
import EnemyDraw from "./EnemyDraw.js";//remove

class EnemyGO extends GameObject{
    constructor(x,y,w,h,r,g,b){
        super();
        this.components.push(new EnemyUpdate(this,x,y,w,h,r,g,b));
        this.components.push(new EnemyDraw(this));
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
      this.components.push(new RectangleDraw(this, "red", ""));
      this.components.push(new EnemyUpdate(this));
    }
      */
}
export default EnemyGO;