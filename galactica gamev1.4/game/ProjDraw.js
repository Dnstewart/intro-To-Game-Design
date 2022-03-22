import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import ProjUpdate from "./ProjUpdate.js"

class ProjDraw extends Component{
    constructor(parent){
        super(parent);
    }
    draw(ctx) {
        let updateComponent = this.parent.components.find(c=>c instanceof ProjUpdate);
    
        ctx.fillStyle = `rgb(${updateComponent.r},${updateComponent.g},${updateComponent.b})`
        ctx.strokeStyle = "white"
    
        ctx.beginPath()
        ctx.rect(
            updateComponent.x,
            updateComponent.y,
            updateComponent.w,
            updateComponent.h
          )
        ctx.fill();
        ctx.stroke();
    }
}
export default ProjDraw;