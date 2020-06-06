import { detectCollision } from './collisionDetection.js'
export default class Ball {
    constructor(game) {
        // console.log('ball');
        this.game = game;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.ball = document.getElementById('img_ball');
        this.size = 16;
        this.reset();
        
    }

    reset() {
        this.speed = { x: 6, y: -4 }
        this.position = {
            x: this.gameWidth / 2,
            y: this.gameHeight / 2
        }
    }

    draw(ctx) {
        ctx.drawImage(this.ball, this.position.x, this.position.y, this.size, this.size)
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        // collision with walls
        if (this.position.x > this.gameWidth - this.size || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if ( this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
        if ( this.position.y > this.gameHeight - this.size) {
            this.game.lives--;
            this.reset();
        }



        // collision with paddle
        // console.log(this.game);


        if (
            detectCollision(this, this.game.paddle)
        ) {
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}