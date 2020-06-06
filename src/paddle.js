export default class Paddle {
    constructor(game) {
        // console.log('paddle', game);
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.width = 150;
        this.height = 30;
        this.maxspeed = 7;
        this.speed = 0;

        this.position = {
            x: (this.gameWidth - this.width) / 2,
            y: this.gameHeight - this.height - 10
        }
        // console.log(this.position);

    }

    draw(ctx) {
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    }

    update(deltaTime) {
        // if(!deltaTime) return
        // console.log(this.gameWidth, this.width);

        this.position.x += this.speed;
        if (this.position.x < 0) this.position.x = 0;
        if (this.position.x > (this.gameWidth - this.width)) this.position.x = this.gameWidth - this.width;

    }

    moveLeft() {
        this.speed = -this.maxspeed;
    }
    moveRight() {
        this.speed = this.maxspeed;
    }
    stop() {
        this.speed = 0;
    }
}