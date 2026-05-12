import {Chess} from 'chess.js';
import {Game} from './Game';
import {BoardView} from './BoardView';

export class chessMover{
private chess = new Chess();
private moves: string[] = [];

startGame(game :Game, boardView :BoardView): Chess{

try{
	this.chess.reset();
	boardView.render(this.chess.board());
	this.chess.loadPgn(game.pgn);
	this.moves = this.chess.history();
	game.setGameLength(this.moves.length);
	this.chess.reset();
	return (this.chess);
	}
	catch (err){
		throw err;
	}
}

chessMove(game :Game, boardView :BoardView): void{
	this.chess.reset();
	let moveIndex = game.getMoveIndex();
	for (let i = 0; i < moveIndex; i++){
		const move = this.moves[i];
		if (!move)
			return;
		this.chess.move(move);
	}
	boardView.render(this.chess.board());
	}
};


/* loadPgn()
history()
move()
board()
fen()
reset()
turn()
isCheckmate()
isDraw() */