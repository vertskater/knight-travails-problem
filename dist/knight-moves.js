"use strict";
/* class ChessBoard {
  public chessBoard: number[][][] = [];
  constructor() {
    for (let i = 0; i < 8; i++) {
      this.chessBoard[i] = [];
      for (let j = 0; j < 8; j++) {
        this.chessBoard[i][j] = [i, j];
      }
    }
  }
} */
class Knight {
    constructor() {
        this.queue = [];
        this.visited = new Set();
        this.path = [];
        //const gameBoard = new ChessBoard();
        this.possibleMoves = [
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [-1, 2],
            [1, -2],
            [1, 2],
            [2, -1],
            [2, 1],
        ];
    }
    isValid(pos) {
        return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
    }
    moves(start, end) {
        this.visited.add(start);
        this.queue.push({ possibleMove: start, currentPath: start });
        while (this.queue.length > 0) {
            let currentData = this.queue.shift();
            if ((currentData === null || currentData === void 0 ? void 0 : currentData.possibleMove[0]) === end[0] &&
                (currentData === null || currentData === void 0 ? void 0 : currentData.possibleMove[1]) === end[1]) {
                this.path = currentData.currentPath;
                break;
            }
            this.possibleMoves.forEach((move) => {
                let next = [
                    (currentData === null || currentData === void 0 ? void 0 : currentData.possibleMove[0]) + move[0],
                    (currentData === null || currentData === void 0 ? void 0 : currentData.possibleMove[1]) + move[1],
                ];
                if (this.isValid(next) && !this.visited.has(next)) {
                    this.visited.add(next);
                    this.queue.push({
                        possibleMove: next,
                        currentPath: currentData === null || currentData === void 0 ? void 0 : currentData.currentPath.concat(next),
                    });
                }
            });
        }
        return this.path;
    }
}
const knight = new Knight();
const knightMove = knight.moves([3, 3], [0, 0]);
console.log(`You made it in ${knightMove.length / 2} moves. Here is your Path: ${knightMove}`);
//# sourceMappingURL=knight-moves.js.map