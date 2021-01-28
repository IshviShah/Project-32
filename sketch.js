const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var base;
var block8,block9,block10,block11,block12,block13,block14,block15,block16;
var polygon;
var slingshot;
var poly;
var polyImg;

var score = 0;

function preload(){
    polyImg = loadImage("polygon.png");
    getBackgroundImage();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    base = new Ground (385,266,170,20);

    block8 = new Box (330,235,30,40);
    block9 = new Box (360,235,30,40);
    block10 = new Box (390,235,30,40);
    block11 = new Box (420,235,30,40);
    block12 = new Box (450,235,30,40);

    block13 = new Box (360,195,30,40);
    block14 = new Box (390,195,30,40);
    block15 = new Box (420,195,30,40);

    block16 = new Box (390,155,30,40);

    //polygon = new Box(300,200,30,30);
    poly = Bodies.circle(50,200,20);
    World.add(world,poly);

    slingshot = new SlingShot(poly,{x:50, y:230});

    
}

function draw(){
    background(0);
    Engine.update(engine);

    noStroke();
    textSize(35);
    fill("white");
    text("SCORE "+score,750,40);

    ground.display(); 
    base.display();   

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    //polygon.displayPolygon();
    imageMode(CENTER)
    image(polyImg,poly.position.x,poly.position.y,40,40);

    slingshot.display();
}


function mouseDragged(){
    Matter.Body.setPosition(this.poly, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.poly);
    }
}
async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //console.log(response);
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=9){
        background("yellow");
    }
    else{
        background ("black");
    }
   
    //console.log(bg);
}

