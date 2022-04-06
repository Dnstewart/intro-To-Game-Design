import Scene from "../engine/Scene.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js";
import Constants from "./Constants.js"
import StartGameObject from "./StartGameObject.js";
import StartUpdateComponent from "./StartUpdateComponent.js";
import PrefabEmpty from "../engine/PrefabEmpty.js";
import Spawner from "./Spawner.js";
import StartSpawner from "./StartSpawner.js";

class StartScene extends Scene {
  constructor() {
    super("Start Game Scene");
  }
  start(){
   this.gameObjects.push(new StartGameObject(window.innerWidth * .2,window.innerHeight*.5));
   this.gameObjects.push(new PrefabEmpty("Spawner").addComponent(new StartSpawner()));
  }
}

export default StartScene;