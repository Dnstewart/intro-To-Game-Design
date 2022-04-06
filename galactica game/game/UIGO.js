import GameObject from "../engine/GameObject.js";
import TextDraw from "../engine/TextDraw.js";
import Text from "../engine/Text.js";
import UIUpdate from "./UIUpdate.js";

class UIGO extends GameObject{
  constructor(x,y){
    super();
    this.components.push(new Text(this, x,y, "", "30px sans"));
    this.components.push(new TextDraw(this, "white", "transparent"));
    this.components.push(new UIUpdate(this));
  }
}
export default UIGO;