export class BoardView {
  private squares: HTMLDivElement[][] = [];

  constructor(private board: HTMLDivElement) {
    for (let row = 0; row < 8; row++) {
        const squareRow: HTMLDivElement[] = [];
        for (let col = 0; col < 8; col++) {
             const square = document.createElement('div');
            square.classList.add('square');
            const isLight = (row + col) % 2 === 0;
            square.classList.add(isLight ? 'light' : 'dark');
            squareRow.push(square);
            this.board.appendChild(square);
        }
        this.squares.push(squareRow);
    }
  }

render(boardState: any): void {
  for (let row = 0; row < 8; row++) {
    const squareRow = this.squares[row];
    if (!squareRow) {
      throw new Error(`Missing row ${row}`);
    }
    for (let col = 0; col < 8; col++) {
      const square = squareRow[col];
      if (!square) {
        throw new Error(`Missing square at ${row}, ${col}`);
      }
      const piece = boardState[row][col];
      square.textContent = piece ? piece.type : '';
    }
  }
}
}