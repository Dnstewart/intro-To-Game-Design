class RectangleDrawComponent extends Component {
  constructor(parent) {
    super(parent);
  }
  draw(ctx) {
    let updateComponent = this.parent.components.find(c=>c instanceof RectangleUpdateComponent);
    
    ctx.fillStyle = `rgb(${updateComponent.r},${updateComponent.g},${updateComponent.b})`
    ctx.strokeStyle = "white"

    ctx.beginPath()
    //ctx.rect(squareX,squareY,squareW,squareH);
    // if(projBoolDraw || projBoolUpdate)
    // {
    //   if(projBoolDraw){
    //     projX = squareX + 20;
    //     projY = squareY - 10;
    //     projBoolUpdate = true;
    //     projBoolDraw = false;
    //   }
    //   ctx.rect(projX,projY,projW,projH);
    // }
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