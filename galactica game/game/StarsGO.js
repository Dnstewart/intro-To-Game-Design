import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import StarsUpdate from "./StarsUpdate.js"
import StarsDraw from "./StarsDraw.js"

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
}
export default StarsGO;