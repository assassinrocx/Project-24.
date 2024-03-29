class Rubber {
    constructor(x,y){
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
    
      this.body = Bodies.circle(x,y,30,options);
      World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        strokeWeight(5);
        stroke("violet");
        fill("pink");
        ellipse(0, 0, this.width );
        pop();
    }

}