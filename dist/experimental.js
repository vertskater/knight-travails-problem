/* import Board from "./modules/board.js";
import { addMove, addAllPossibleMoves } from "./modules/knightMoves.js";

new Board();

const findPath = (startXY: [number, number], endXY: [number, number]) => {
  let [startX, startY] = startXY;
  let [endX, endY] = endXY;
  addMove(startX, startY, 0);
  let index = 0;
  do {
    addAllPossibleMoves(index++);
  } while (Board.board[endX][endY] === undefined);
  return Board.board[endX][endY];
};

console.log(findPath([3, 3], [4, 3])); */
import { findWay } from "./modules/findWay.js";
findWay();
class Cell {
    constructor(x, y, distance) {
        this.x = x;
        this.y = y;
        this.distance = distance;
    }
}
const isInside = (x, y, distance) => {
    if (x > 0 && x <= distance && y > 0 && y <= distance) {
        return true;
    }
    return false;
};
const cellUnvisited = (size) => {
    const visit = new Array(size);
    for (let i = 0; i < size; i++) {
        visit[i] = new Array(size);
        for (let j = 0; j < size; j++) {
            visit[i][j] = false;
        }
    }
    return visit;
};
function minStepsToReachTarget(startingPoint, endPoint, size) {
    const [startX, startY] = startingPoint;
    const [endX, endY] = endPoint;
    let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
    let dy = [-1, -2, -2, -1, 1, 2, 2, 1];
    const knightStateQueue = [];
    knightStateQueue.push(new Cell(startX, startY, 0));
    let x, y;
    let currentElementInQueue;
    const visit = cellUnvisited(size);
    visit[startX][startY] = true;
    while (knightStateQueue.length !== 0) {
        currentElementInQueue = knightStateQueue.shift();
        if (currentElementInQueue.x === endX && currentElementInQueue.y === endY) {
            return currentElementInQueue.distance;
        }
        for (let i = 0; i < 8; i++) {
            x = currentElementInQueue.x + dx[i];
            y = currentElementInQueue.y + dy[i];
            if (isInside(x, y, size) && !visit[x - 1][y - 1]) {
                visit[x - 1][y - 1] = true;
                knightStateQueue.push(new Cell(x, y, currentElementInQueue.distance + 1));
            }
        }
    }
    return Number.MAX_VALUE;
}
console.log(minStepsToReachTarget([1, 1], [8, 8], 8));
//# sourceMappingURL=experimental.js.map