class Tree{
    constructor(x,y,width,height){
    var options={
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.treeimg=loadImage("Plucking mangoes/tree.png");
}
display(){
    imageMode(CENTER);
   image(this.treeimg,this.body.position.x,this.body.position.y,this.width,this.height)
}
}