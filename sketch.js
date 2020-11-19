var ball;
var database,position;
var gameState=0;
var form,player,game,playerCount

function setup(){
    createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();

 
}

function draw(){
    background("white");
   
    
    drawSprites();
}

