import GameObject from "../engine/GameObject.js";
import Text from "../engine/Text.js";
import TextDraw from "../engine/TextDraw.js";
import EndUpdate from "./EndUpdate.js";
import Constants from "./Constants.js";

class EndGO extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"Game Over, your score was " + Constants.score +".  Click to go back to start.", "25px monospace"))
    this.components.push(new TextDraw(this, "cyan", "purple"));
    this.components.push(new EndUpdate(this));
  }
}

export default EndGO;