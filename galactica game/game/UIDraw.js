import Component from "../engine/Component.js"
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
        ctx.font = `${txtSize}`+'px serif'
        ctx.fillText('Time: ' + `${updateComponent.tl}`,UIX,UIY);
        ctx.fillText('Score: ' + `${updateComponent.s}`,UIX + 150,UIY);
        ctx.fillText('Health: ' + `${updateComponent.h}`,UIX + 300,UIY);
    }
}
export default UIDraw;