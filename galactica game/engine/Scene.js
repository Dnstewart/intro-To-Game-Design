class Scene{
    constructor(title){
      this.title = title;
      this.back = [];
      this.gameObjects = [];
    }

    restart(){
      this.gameObjects = [];
      this.back = [];
      this.start();
    }

    update(){
      for (let gameObject of this.gameObjects) {
        gameObject.update();
      }
      for (let gameObject of this.back) {
        gameObject.update();
      }
    }

    draw(ctx){
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      for (let gameObject of this.back) {
        gameObject.draw(ctx);
      }
      for (let gameObject of this.gameObjects) {
          gameObject.draw(ctx);
      }
    }

    remove(){
      this.gameObjects = this.gameObjects.filter(g=>!g.markForDelete);
    }
  }
  
  export default Scene;