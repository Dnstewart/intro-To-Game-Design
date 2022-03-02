import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import PlayerUpdate from "./PlayerUpdate.js"
import PlayerDraw from "./PlayerDraw.js"

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
}
export default PlayerGO;