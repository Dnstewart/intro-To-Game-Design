let timeLen = 0;
let timeBool = false;
let UIX = 50;
let UIY = 50;
let txtSize = 25;



class UIUpdate extends Component{
    constructor(parent, s, tl, h){
        super(parent);
        this.s = s;
        this.tl = tl;
        this.h = h;
    }
    update() {
        if (timeLen + 1 == Math.floor(Time.timePassed)){
            timeBool = true;
        }
        timeLen = Math.floor(Time.timePassed);
        this.tl = Math.floor(Time.timePassed);
        if (timeBool){
            score += 10;
            timeBool = false;
        }
        this.s = score;
        this.h = health;
    }
}