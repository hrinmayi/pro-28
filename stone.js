class Stone{
    constructor(x,y,width,height){
    var options={
        isStatic:false,
        restitution:0.8,
        friction:1,
        density:1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.stoneimg=loadImage("Plucking mangoes/stone.png");
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.stoneimg, 0, 0, this.width, this.height);
    pop();
}
}