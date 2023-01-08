import Board from "./board.js";

export const addMove = (x: number, y: number, level: number) => {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && Board.board[x][y] === undefined) {
    Board.board[x][y] = level;
  }
};

export const addAllMoves = (x: number, y: number, level: number) => {
  const possibleMoves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];
  possibleMoves.forEach((move) => {
    if (move[0] < 0 && move[1] < 0) {
      addMove(x - Math.abs(move[0]), y - Math.abs(move[1]), level);
    }
    if (move[0] > 0 && move[1] < 0) {
      addMove(x + move[0], y - Math.abs(move[1]), level);
    }
    if (move[0] < 0 && move[1] > 0) {
      addMove(x - Math.abs(move[0]), y + move[1], level);
    }
    if (move[0] > 0 && move[1] > 0) {
      addMove(x + move[0], y + move[1], level);
    }
  });
};

export const addAllPossibleMoves = (level: number, j?: number) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (Board.board[i][j] === level) {
        addAllMoves(i, j, level + 1);
      }
    }
  }
};
