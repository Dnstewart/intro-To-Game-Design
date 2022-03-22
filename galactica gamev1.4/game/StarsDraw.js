import Component from "../engine/Component.js"
import GameObject from "../engine/GameObject.js"
import StarsUpdate from "./StarsUpdate.js"

class StarsDraw extends Component{
    constructor(parent){
        super(parent);
    }
    draw(ctx) {
        let updateComponent = this.parent.components.find(c=>c instanceof StarsUpdate);
        let cx = updateComponent.x + 0.5 * updateComponent.w;
        let cy = updateComponent.y + 0.5 * updateComponent.h;

        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.beginPath()
        // ctx.translate(cx,cy);
        // ctx.rotate((Math.PI/180) * 45);
        // ctx.translate(-cx,-cy);
        ctx.rect(
            updateComponent.x,
            updateComponent.y,
            updateComponent.w,
            updateComponent.h
          );
        //ctx.rotate(0);
        ctx.fill();
        ctx.stroke();
    }
}
export default StarsDraw;