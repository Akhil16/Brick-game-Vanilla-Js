

export default class InputHandler {
    constructor(paddle, game) {
        document.addEventListener('keydown', event => {
             console.log(event.keyCode);

            switch (event.keyCode) {
                case 37:
                    // console.log('move left');
                    paddle.moveLeft()
                    break;

                case 39:
                    // console.log('move right');
                    paddle.moveRight()
                    break;
                case 27:
                    // console.log('move right');
                    game.togglePause();
                    break;
                case 32:
                    // console.log('move right');
                    game.start();
                    break;

                default:
                    break;
            }

        });
        document.addEventListener('keyup', event => {
            // // console.log(event.keyCode);

            switch (event.keyCode) {
                case 37:
                    // console.log('move left');

                    if (paddle.speed < 0) paddle.stop();
                    break;

                case 39:
                    // console.log('move right');
                    if (paddle.speed > 0) paddle.stop();
                    break;

                default:
                    break;
            }

        });
    }
}