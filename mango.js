class Mango{
    constructor(x,y,width,height){
   var options={
    isStatic:true,
    restitution:0.5,
    friction:0.3,
    density:1
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world, this.body);
this.mangoimg=loadImage("Plucking mangoes/mango.png");
}
display(){
imageMode(CENTER);
image(this.mangoimg,this.body.position.x,this.body.position.y,this.width,this.height)
  
}
}