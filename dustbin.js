class Dustbin{

    constructor(x,y){

  var options={isStatic:true}
  this.body1=Bodies.rectangle(x,y,100,20,options);
  this.body2=Bodies.rectangle(x+60,y-50,20,100,options);
  this.body3=Bodies.rectangle(x-60,y-50,20,100,options);
  
  World.add(world,this.body1);
  
  World.add(world,this.body2);
  
  World.add(world,this.body3);




    }

display(){

var pos=this.body1.position;
rectMode(CENTER);
fill("yellow");
rect(pos.x,pos.y,100,20);
rect(pos.x+60,pos.y-50,20,100);
rect(pos.x-60,pos.y-50,20,100);



}



}
