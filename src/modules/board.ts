export default class Board {
  public static board: number[][] = [];
  constructor() {
    for (let i = 0; i < 8; i++) {
      Board.board[i] = [];
    }
  }
}
