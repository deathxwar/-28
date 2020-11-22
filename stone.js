class Stone{
    constructor(x,y){
        var options = {
        }
 
       this.body = Bodies.rectangle(x,y,45,50)
       this.width = 45
       this.height = 50
       this.image = loadImage("stone.png")
    }
    display(){
        var pos = this.body.position
        push();
        rotate(this.body.angle)
        translate(pos.x,pos.y)
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}