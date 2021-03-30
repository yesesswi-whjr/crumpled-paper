class Paper{
constructor(x,y,r){
var options={
  restitution:0.3,
  isStatic:false,
  friction:0.5,
  density:1.2

}

this.body=Bodies.circle(x,y,r,options)
this.r=r
World.add(world,this.body)
}
display(){
push()
translate(this.body.position.x,this.body.position.y)
fill("pink")
circle(0,0,this.r*2)
pop()

}
}