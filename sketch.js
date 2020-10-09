var canvas, bg, playerCount;
var gameState = 0
var db, form, player, game;

function setup(){
  canvas = createCanvas(800,800);
  
  game = new Game();
  game.getState();
  game.start();
  db = firebase.database()
}

function draw (){

}
