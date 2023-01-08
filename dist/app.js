import Board from "./modules/board.js";
import { addMove, addAllPossibleMoves } from "./modules/knightMoves.js";
new Board();
const findPath = (startXY, endXY) => {
    let [startX, startY] = startXY;
    let [endX, endY] = endXY;
    addMove(startX, startY, 0);
    let index = 0;
    do {
        addAllPossibleMoves(index++);
    } while (Board.board[endX][endY] === undefined);
    return Board.board[endX][endY];
};
console.log(findPath([3, 3], [4, 3]));
//# sourceMappingURL=app.js.map