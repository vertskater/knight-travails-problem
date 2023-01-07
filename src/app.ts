import Board from "./modules/board.js";
import { addMove, addAllPossibleMoves } from "./modules/knightMoves.js";

new Board();

const findPath = (
  startX: number,
  startY: number,
  endX: number,
  endY: number
) => {
  addMove(startX, startY, 0);
  let index = 0;
  do {
    addAllPossibleMoves(index++);
  } while (Board.board[endX][endY] === undefined);
  return Board.board[endX][endY];
};

console.log(findPath(0, 0, 3, 3));
