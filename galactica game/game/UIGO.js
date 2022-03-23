import GameObject from "../engine/GameObject.js"
import TextDraw from "../engine/TextDraw.js"
import Text from "../engine/Text.js"
import UIUpdate from "./UIUpdate.js"
import UIDraw from "./UIDraw.js"

class UIGO extends GameObject{
    constructor(s, tl, h){
        super();
        this.components.push(new UIUpdate(this,s,tl,h));
        this.components.push(new UIDraw(this));
        // this.components.push(new Text(this, x,y, "", "20px sans"));
        // this.components.push(new TextDraw(this, "white", "white"));
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
      }
      draw(ctx){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
      }
}
export default UIGO;