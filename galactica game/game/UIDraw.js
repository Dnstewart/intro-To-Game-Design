import Component from "../engine/Component.js"
import Constants from "./constants.js"
import GameObject from "../engine/GameObject.js"
import UIUpdate from "./UIUpdate.js"

class UIDraw extends Component{
    constructor(parent){
        super(parent);
    }
    draw(ctx) {
        let updateComponent = this.parent.components.find(c=>c instanceof UIUpdate);

        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.font = `${Constants.txtSize}`+'px serif'
        ctx.fillText('Time: ' + `${updateComponent.tl}`,Constants.UIX,Constants.UIY);
        ctx.fillText('Score: ' + `${updateComponent.s}`,Constants.UIX + 150,Constants.UIY);
        ctx.fillText('Health: ' + `${updateComponent.h}`,Constants.UIX + 300,Constants.UIY);
    }
}
export default UIDraw;