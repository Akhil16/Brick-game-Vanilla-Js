import Brick from './brick.js';

export function buildLevel(game, level) {
    let bricks = [];

    level.forEach((row, rowId) => {
        row.forEach((brick, brickId) => {
            
            if (brick === 1) {
                let position = {
                    x: 80 * brickId,
                    y: 100 + 24*rowId
                };
                bricks.push(new Brick(game, position));
            }
        });
    });
    return bricks;
}

export const level1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    // [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1]
];
export const level2 = [
    // [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];