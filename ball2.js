class PaperBall2{
    constructor(x, y, width, height){
        var options={
            isStatic:true,
            restitution : 0.3,
            friction : 0.5,
            density : 0.2
        }

        this.body = Matter.Bodies.circle(450, 350, 20, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("purple");
        ellipse(340, 350, 20);
    }
}