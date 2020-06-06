import { detectCollision } from './collisionDetection.js'

export default class Brick {
    constructor(game, position) {
        // console.log('paddle', game);
        this.game = game;

        this.brick = document.getElementById('img_brick');
        this.width = 80;
        this.height = 24;
        this.position = position;
        this.markedForDeletion = false;
    }

    draw(ctx) {
        // ctx.fillStyle = '#00f';
        ctx.drawImage(this.brick, this.position.x, this.position.y, this.width, this.height)

    }

    update(deltaTime) {
        if (detectCollision(this.game.ball, this)) {
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDeletion = true;
            // this.game.ball.position.y = this.game.ball.position.y + this.height;
        }
    }


}