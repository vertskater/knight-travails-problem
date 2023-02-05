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
  private possibleMoves: number[][];
  private queue: { possibleMove: number[]; currentPath: any }[] = [];
  private visited = new Set();
  private path: number[] | number[][] = [];

  constructor() {
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
  isValid(pos: number[]) {
    return pos[0] >= 0 && pos[0] < 8 && pos[1] >= 0 && pos[1] < 8;
  }

  moves(start: number[], end: number[]): number[][] | number[] {
    this.visited.add(start);
    this.queue.push({ possibleMove: start, currentPath: start });

    while (this.queue.length > 0) {
      let currentData = this.queue.shift();
      if (
        currentData?.possibleMove[0] === end[0] &&
        currentData?.possibleMove[1] === end[1]
      ) {
        this.path = currentData.currentPath;
        break;
      }
      this.possibleMoves.forEach((move) => {
        let next = [
          currentData?.possibleMove[0]! + move[0],
          currentData?.possibleMove[1]! + move[1],
        ];
        if (this.isValid(next) && !this.visited.has(next)) {
          this.visited.add(next);
          this.queue.push({
            possibleMove: next,
            currentPath: currentData?.currentPath.concat(next),
          });
        }
      });
    }
    return this.path;
  }
}

const knight = new Knight();

const knightMove = knight.moves([3, 3], [0, 0]);
console.log(
  `You made it in ${
    knightMove.length / 2
  } moves. Here is your Path: ${knightMove}`
);
