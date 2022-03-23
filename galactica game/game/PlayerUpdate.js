// let playerX = window.innerWidth * 0.5;
// let playerY = window.innerHeight - 50;
// let playerW = 50;
// let playerH = 50;
// let score = 0;
// let health = 5;

import Component from "../engine/Component.js"
//import Game from "../engine/Game.js";
//import scripts from "../engine/scripts.js";
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
            // Game.scene().gameObjects.push(new ProjGO(this.x + 20,this.y + 10,Constants.projW,Constants.projH,0,255,150));
            Constants.projCnt++; // maybe not needed
            console.log("pew"); //same but fun
            Input.mousePressed = false;
        }

           if (Input.getKey('w')) {
                if (this.y > 0) {
                    this.y -= 5;
                }
            }
            if (Input.getKey('s')) {
                if (this.y + this.h < window.innerHeight) {
                    this.y += 5;
                }
            }
            if (Input.getKey('a')) {
                if (this.x > 0) {
                    this.x -= 5;
                }
            }
            if (Input.getKey('d')) {
                if (this.x + this.w < window.innerWidth) {
                    this.x += 5;
                }
            } 
        
    }
}
export default PlayerUpdate;