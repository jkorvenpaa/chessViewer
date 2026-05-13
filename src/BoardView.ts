export class BoardView {
  private squares: HTMLDivElement[][] = [];
  private currentPieces: string[][] = [];

  constructor(private board: HTMLDivElement) {
    for (let row = 0; row < 8; row++) {
        const squareRow: HTMLDivElement[] = [];
        const pieceRow: string[] = [];
        for (let col = 0; col < 8; col++) {
             const square = document.createElement('div');
            square.classList.add('square');
            const isLight = (row + col) % 2 === 0;
            square.classList.add(isLight ? 'light' : 'dark');
            squareRow.push(square);
			pieceRow.push('');
            this.board.appendChild(square);
        }
        this.squares.push(squareRow);
        this.currentPieces.push(pieceRow);
    }
  }


render(boardState: any): void {
  for (let row = 0; row < 8; row++) {
    const squareRow = this.squares[row];
    const pieceRow = this.currentPieces[row];
    if (!squareRow) {
      throw new Error(`Missing square row ${row}`);
    }
    if (!pieceRow) {
      throw new Error(`Missing piece row ${row}`);
    }
    const boardRow = boardState[row];
    if (!boardRow) {
      throw new Error(`Missing board row ${row}`);
    }
    for (let col = 0; col < 8; col++) {
      const square = squareRow[col];
      if (!square) {
        throw new Error(`Missing square at ${row}, ${col}`);
      }
      const piece = boardRow[col];
      const key = piece ? `${piece.color}${piece.type}` : '';
      if (pieceRow[col] === key) {
        continue;
      }
      pieceRow[col] = key;
      square.innerHTML = '';
      if (key) {
        const img = document.createElement('img');
        img.src = `/chessViewer/assets/${key}.svg`;
        img.classList.add('piece');
        square.appendChild(img);
      }
    }
  }
}
}