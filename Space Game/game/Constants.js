class Constants{
    static max = 30;
    static startX = 100;
    static offsetX = 50;
    static maxWidth = 400;
    static startY = 400;
    static width = 10;
    static height = 50;

    static tempArray = [];
    static tempArray2 = [];

    static playerX = window.innerWidth * 0.5;
    static playerY = window.innerHeight - 50;
    static playerW = 50;
    static playerH = 50;
    static score = 0;
    static health = 5;

    static enemyX = 0;
    static enemyY = 0;
    static enemyW = 35;
    static enemyH = 35;
    static enemys = [];
    static maxEnemys = 2000;
    static enemyCnt = 1;
    static enemyScore = 100;

    static projX = 0;
    static projY = 0;
    static projW = 10;
    static projH = 10;
    static projectiles = [];
    //static maxProj = 100;
    static projCnt = 0;

    static starX = 0;
    static starY = 0;
    static starW = 2;
    static starH = 2;
    static stars = [];
    static maxstars = 20000;
    static starCnt = 1;

    static rockX = 0;
    static rockY = 0;
    static rockW = 25;
    static rockH = 25;
    static rocks = [];
    static maxRocks = 1500;
    static rockCnt = 1;

    static timeLen = 0;
    static timeBool = false;
    static UIX = 50;
    static UIY = 50;
    static txtSize = 25;

    static cameraDefW = 900;
    static cameraDefH = 600;
    static gameMargins = (window.innerWidth - this.cameraDefW) / 2;

    static updateCnt = 0;

  }
  
  export default Constants;