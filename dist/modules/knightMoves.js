import Board from "./board.js";
export const addMove = (x, y, level) => {
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && Board.board[x][y] === undefined) {
        Board.board[x][y] = level;
    }
};
export const addAllMoves = (x, y, level) => {
    addMove(x + 1, y + 2, level);
    addMove(x + 2, y + 1, level);
    addMove(x + 2, y - 1, level);
    addMove(x + 1, y - 2, level);
    addMove(x - 1, y - 2, level);
    addMove(x - 2, y - 1, level);
    addMove(x - 2, y + 1, level);
    addMove(x - 1, y + 2, level);
};
export const addAllPossibleMoves = (level) => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (Board.board[i][j] === level) {
                addAllMoves(i, j, level + 1);
            }
        }
    }
};
//# sourceMappingURL=knightMoves.js.map