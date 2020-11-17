var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
   dogImg=loadImage("Images/dogImg.png");
   dogImg1=loadImage("Images/dogImg1.png");
  }


function setup() {
  
  createCanvas(500,500);
  database=firebase.database();
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  foodS=1
  textSize(20); 
}


function draw() {
  background(46,139,87);
 
  if(keyDown(UP_ARROW)){
    if(foodS===1){
    foodS=foodS-1
    }
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food packet : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed The Puppy And Make It Happy!",50,10,300,20);
}


function readStock(data){
  foodS=data.val();
}


function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
 
}


