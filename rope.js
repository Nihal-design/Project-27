class Chain{
    constructor(bodyA, bodyB){
        //this.offsetX=offsetX;
        //this.offsetY=offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            //pointB:{x:this.offsetX, x:this.offsetY}
            stiffness:0.4,
            length:10
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);

    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}