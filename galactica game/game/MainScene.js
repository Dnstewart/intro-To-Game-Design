import Scene from "../engine/Scene.js";
import Constants from "./Constants.js;"
import PlayerGO from "./PlayerGO.js";
import ProjGO from "./ProjGO.js";
import EnemyGO from "./EnemyGO.js";
import RockGO from "./RockGO.js";
import StarsGO from "./StarsGO.js";
import UIGO from "./UIGO.js";
import scripts from "../engine/scripts.js";

/* class MainScene extends Scene {
   constructor() {
        super("Main Galactica Scene");
        Game.scene().gameObjects.push(new UIGO(Constants.score, Constants.timeLen, Constants.health));
        Game.scene().gameObjects.push(new PlayerGO(Constants.playerX, Constants.playerY, Constants.playerW, Constants.playerH,0,255,255));
        Game.scene().gameObjects.push(new StarsGO(Constants.starX, Constants.starY, Constants.starW, Constants.starH));
        Game.scene().gameObjects.push(new RockGO(40, Constants.rockY, getRandomInt(Constants.rockW, Constants.rockW + 25), getRandomInt(Constants.rockH, Constants.rockH + 25)));
        Game.scene().gameObjects.push(new EnemyGO(20, Constants.enemyY, Constants.enemyW, Constants.enemyH, r, g, b))
        Game.scene().gameObjects.push()

        ctx.fillText('Time: ' + `${tl}`,Constants.UIX,Constants.UIY);
        ctx.fillText('Score: ' + `${s}`,Constants.UIX + 150,Constants.UIY);
        ctx.fillText('Health: ' + `${h}`,Constants.UIX + 300,Constants.UIY);

   }
 }

//export default MainScene;*/