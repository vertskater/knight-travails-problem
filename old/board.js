class Board {
  constructor(size) {
    this.size = size;
    this.board = [];
  }
  initBoard() {
    let j = 1;
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.board.push([i + 1, j + 1]);
      }
    }
    console.log(this.board);
  }
}

module.exports = Board;
