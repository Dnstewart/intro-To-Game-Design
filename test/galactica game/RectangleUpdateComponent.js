let startX = 100;
let startY = 400;
let offsetX = 50;
let width = 10;
let height = 50;
let max = 50;
let maxWidth = 400;
//let colorChange = false;

class RectangleUpdateComponent extends Component {
  constructor(parent, x, y, w, h, r, g, b, percent) {
    super(parent);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.percent = percent;
  }
  update() {
    this.b = 0;
    
    // if (mouseIsDown){ 
    //   projBoolDraw = true;
    //   console.log(`yep`);
    // }
    // if (projBoolUpdate){
    //   projY -= .1;
    //   console.log(`is it working`);
    //   if (projY < 0){
    //     projBoolUpdate = false;
    //   }
    // }
    
    let h = (1 - (this.percent) * height);

    let percentSquared = this.percent * this.percent;

    this.y = startY - 50 - this.h / 2 + ease(Time.timePassed) * 50 * percentSquared;
    //directionCheck(up,down,left,right);
  }
}