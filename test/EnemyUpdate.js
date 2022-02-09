let enemyX = 0;
let enemyY = 0;
let enemyW = 25;
let enemyH = 25;
let enemys = [];
let maxEnemys = 20;
let enemyCnt = 1;


class EnemyUpdate extends Component{
    constructor(parent,x,y,w,h,r,g,b){
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
        //this.bool = true;
    }
    update() {
        if(Time.timePassed % 0.5 == 0 && enemyCnt != maxEnemys){
            let x = getRandomInt(5, window.innerWidth - (enemyW + 5));
            let r = 255;
            let g = 255;
            let b = 0;

            enemys.push(new EnemyGO(x, enemyY, enemyW, enemyH, r, g, b));
            enemyCnt++;
        }
        console.log(`${Time.timePassed}`);
        this.y += 1;
        if(this.y > window.innerHeight){
           enemys.shift(); 
           enemyCnt--;
        }
    }
}