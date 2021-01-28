class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0,
            
        }
        this.body1 = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body1);

        /*this.body2 = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        World.add(world, this.body2);*/
      
      
       
      }
      display(){
        var pos =this.body1.position;
        rectMode(CENTER);
        fill("blue");
        //rect(pos.x, pos.y, this.width, this.height);

        if(this.body1.speed<3){ 
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER); 
          fill("blue"); 
          rect(0, 0, this.width, this.height); 
          pop();
        }
        else{
          World.remove(world,this.body1);
          push();
          this.visibility = this.visibility-5;
          tint(255,this.visibility);
          pop()
        }

        
      }

      displayPolygon(){
        var angle = this.body2.angle;
        push();
        translate(this.body2.position.x, this.body2.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }

      score(){
        if(this.visibility<0 && this.visibility >-105){
          score++;
        }
      }
    };