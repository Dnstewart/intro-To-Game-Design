class UIGO extends GameObject{
    constructor(s, tl, h){
        super();
        this.components.push(new UIUpdate(this,s,tl,h));
        this.components.push(new UIDraw(this));
    }
    update(){
        this.components.filter(c=>c.update).forEach(c=>c.update());
      }
      draw(){
        this.components.filter(c=>c.draw).forEach(c=>c.draw(ctx));
      }
}