class Knight {
  constructor(coord) {
    this.coord = coord;
    this.moveHistory = [];
    this.possibleMoves = [
      [2, 1],
      [2, -1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
    ];
  }
}

module.exports = Knight;
