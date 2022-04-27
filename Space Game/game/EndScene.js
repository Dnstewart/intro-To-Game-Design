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
    this.foreGround.push(new EndGO(window.innerWidth * .2, window.innerHeight *.5));

    // DB connection
    /* doesnt work 
    let mysql = require('mysql');//SpaceGameDB?useSSL=false",
    let con = mysql.createConnection({
      host: "ec2-54-91-176-67.compute-1.amazonaws.com",
      user: "dnstewartremote",
      password: "Chevrolet1!",
      database: "SpaceGameDB"
    });
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      let sql = "INSERT INTO score (SCORE) VALUES ('" + Constants.score + "')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
      });
      con.query("SELECT * FROM score", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });*/


    this.gameObjects.push(new PrefabEmpty("EndSpawner").addComponent(new EndSpawn()));

    // link to node.js to connect to a DB https://www.w3schools.com/nodejs/nodejs_mysql.asp
  }
}

export default EndScene;