import Game from "./game.js";

 
let canvas = document.getElementById('gamescreen');

let ctx = canvas.getContext('2d');
console.log(canvas.width);


const GAME_WIDTH = canvas.width;

const GAME_HEIGHT = canvas.height;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
// game.start();

let lastTime = 0;


function gameloop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameloop);
}


requestAnimationFrame(gameloop);