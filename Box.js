class Box{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8

    
        }  
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("pink");
      rect(pos.x,pos.y,this.width,this.height);
      }
}