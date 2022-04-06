import Scene from "../engine/Scene.js"
import Constants from "./Constants.js"
import PrefabEmpty from "../engine/PrefabEmpty.js";
import StartSpawner from "./StartSpawner.js";
import EndGO from "./EndGO.js";

class EndScene extends Scene {
  constructor() {
    super("End Game Scene");
  }
  start(){  
    this.back = Constants.tempArray;
    this.gameObjects.push(new EndGO(window.innerWidth * .25,window.innerHeight*.5));
    this.gameObjects.push(new PrefabEmpty("EndSpawner").addComponent(new StartSpawner()));
  }
}

export default EndScene;