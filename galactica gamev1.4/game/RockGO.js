import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import Rectangle from "../engine/Rectangle.js";
import RockUpdate from "./RockUpdate.js"
import RockDraw from "./RockDraw.js"

class RockGO extends GameObject{
    constructor(x,y,w,h,r,g,b){
        super();
        this.components.push(new RockUpdate(this,x,y,w,h,r,g,b));
        this.components.push(new RockDraw(this));
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
      }
      draw(ctx){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
      }
}
export default RockGO;