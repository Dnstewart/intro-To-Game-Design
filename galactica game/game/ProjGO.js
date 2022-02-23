import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import ProjUpdate from "./ProjUpdate.js"
import ProjDraw from "./ProjDraw.js"

class ProjGO extends GameObject{
    constructor(x,y,w,h,r,g,b){
        super();
        this.components.push(new ProjUpdate(this,x,y,w,h,r,g,b));
        this.components.push(new ProjDraw(this));
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
      }
      draw(){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
      }
}
export default ProjGO;