import {getRandomInt} from "../engine/scripts.js";
import Time from "../engine/Time.js";
import Scene from "../engine/Scene.js";
import Constants from "./Constants.js"
import PlayerGO from "./PlayerGO.js";
//import ProjGO from "./ProjGO.js";
import EnemyGO from "./EnemyGO.js";
import RockGO from "./RockGO.js";
import StarsGO from "./StarsGO.js";
import UIGO from "./UIGO.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import PrefabRectangle from "../engine/PrefabRectangle.js";
import Spawner from "./Spawner.js";

 class MainScene extends Scene {
   constructor() {
     super("Main Galactica Scene");
   }
   start(){
     this.back = Constants.tempArray;
     Constants.health = 5;
     Constants.updateCnt = 0;
     this.gameObjects.push(new PlayerGO(Constants.playerX, Constants.playerY, Constants.playerW, Constants.playerH));
     this.gameObjects.push(new PrefabRectangle(window.innerHeight, 5, Constants.gameMargins - 5, 0));
     this.gameObjects.push(new PrefabRectangle(window.innerHeight, 5, Constants.gameMargins + Constants.cameraDefW, 0));
     //Constants.gameMargins + Constants.cameraDefW + 5
     this.foreGround.push(new UIGO(Constants.UIX, Constants.UIY));
     this.gameObjects.push(new PrefabEmpty("Spawner").addComponent(new Spawner()));
   }
 }

export default MainScene;