import {getRandomInt} from "../engine/scripts.js";
import Scene from "../engine/Scene.js";
import Constants from "./Constants.js"
import PlayerGO from "./PlayerGO.js";
//import ProjGO from "./ProjGO.js";
import EnemyGO from "./EnemyGO.js";
import RockGO from "./RockGO.js";
import StarsGO from "./StarsGO.js";
import UIGO from "./UIGO.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import Spawner from "./Spawner.js";

 class MainScene extends Scene {
   constructor() {
     super("Main Galactica Scene");
   }
   start(){
     this.back = Constants.tempArray;
     Constants.health = 5;
     this.gameObjects.push(new PlayerGO(Constants.playerX, Constants.playerY, Constants.playerW, Constants.playerH));
     this.gameObjects.push(new UIGO(Constants.UIX, Constants.UIY));
     this.gameObjects.push(new PrefabEmpty("Spawner").addComponent(new Spawner()));
   }
 }

export default MainScene;