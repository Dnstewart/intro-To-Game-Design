import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import StartUpdateComponent from "./StartUpdateComponent.js"

class StartGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    this.components.push(new Text(this, this.x,this.y,"Welcome to Discount Galactica, Click to start.", "25px monospace"))
    this.components.push(new TextDraw(this, "cyan", "purple"))
    this.components.push(new StartUpdateComponent(this))
  }
}

export default StartGameObject;