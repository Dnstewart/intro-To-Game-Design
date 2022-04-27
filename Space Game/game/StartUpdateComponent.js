import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Input from "../engine/Input.js";
import Time from "../engine/Time.js"
import Constants from "./Constants.js"


class StartUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
    }
  update() {
    Input.attach(document);
    if(Input.mousePressed){
      Game.changeScene(1);
      Constants.tempArray = Game.scene().back;
    }
  }
}

export default StartUpdateComponent;