import Board from "./board.js";

export const addMove = (x: number, y: number, level: number) => {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && Board.board[x][y] === undefined) {
    Board.board[x][y] = level;
  }
};

export const addAllMoves = (x: number, y: number, level: number) => {
  addMove(x + 1, y + 2, level);
  addMove(x + 2, y + 1, level);
  addMove(x + 2, y - 1, level);
  addMove(x + 1, y - 2, level);
  addMove(x - 1, y - 2, level);
  addMove(x - 2, y - 1, level);
  addMove(x - 2, y + 1, level);
  addMove(x - 1, y + 2, level);
};

export const addAllPossibleMoves = (level: number) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (Board.board[i][j] === level) {
        addAllMoves(i, j, level + 1);
      }
    }
  }
};
