import Scene from "../engine/Scene.js"
import Constants from "./Constants.js"
import PrefabEmpty from "../engine/PrefabEmpty.js";
import EndSpawn from "./EndSpawn.js";
import EndGO from "./EndGO.js";

class EndScene extends Scene {
  constructor() {
    super("End Game Scene");
  }
  start(){  
    this.back = Constants.tempArray;
    this.foreGround.push(new EndGO(window.innerWidth * .25,window.innerHeight*.5));
    this.gameObjects.push(new PrefabEmpty("EndSpawner").addComponent(new EndSpawn()));
  }
}

export default EndScene;