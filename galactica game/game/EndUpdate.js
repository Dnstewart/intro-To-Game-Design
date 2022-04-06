import Component from "../engine/Component.js"
import Game from "../engine/Game.js";
import Input from "../engine/Input.js";
import Time from "../engine/Time.js"


class EndUpdate extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
    }
  update() {
    Input.attach(document);
    if(Input.mousePressed){
      Game.changeScene(0);
    }
  }
}

export default EndUpdate;