// let playerX = window.innerWidth * 0.5;
// let playerY = window.innerHeight - 50;
// let playerW = 50;
// let playerH = 50;
// let score = 0;
// let health = 5;

import Component from "../engine/Component.js"
import Constants from "./Constants.js"
//import Time from "../engine/time.js"
import Input from "../engine/input.js"
import ProjGO from "./ProjGO.js"

Input.attach(document);

class PlayerUpdate extends Component{
    constructor(parent,x,y,w,h,r,g,b){
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    update() {
        if (Input.mousePressed){
            Constants.projectiles.push(new ProjGO(this.x + 20,this.y + 10,Constants.projW,Constants.projH,0,255,150));
            Constants.projCnt++;
            console.log("pew");
            Input.mousePressed = false;
        }
        // console.log(`${Input.getKey(0)}`);
        // console.log(`${Input.getKey(1)}`);
        // console.log(`${Input.getKey(2)}`);
        // console.log(`${Input.getKey(3)}`);
       //for(let i = 0; i < 4; i++){
           if (Input.getKey('w')) {
                if (this.y > 0) {
                    this.y -= 5;
                }
                else {
                    console.log("Top boundry reached.\n" + `${this.y}`);
                }
            }
            if (Input.getKey('s')) {
                if (this.y + this.h < window.innerHeight) {
                    this.y += 5;
                }
                else {
                    console.log("Bottom boundry reached.\n");
                }
            }
            if (Input.getKey('a')) {
                if (this.x > 0) {
                    this.x -= 5;
                }
                else {
                    console.log("Left boundry reached.\n");
                }
            }
            if (Input.getKey('d')) {
                if (this.x + this.w < window.innerWidth) {
                    this.x += 5;
                }
                else {
                    console.log("Right boundry reached.\n");
                }
            } 
       //}
        
    }
}
export default PlayerUpdate;