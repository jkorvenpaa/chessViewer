import {Chess} from 'chess.js';
import {Game} from './Game';
import {BoardView} from './BoardView';

export class chessMover{
private chess = new Chess();
private moves: string[] = [];

startView(game :Game, boardView :BoardView): Chess{

try{
	this.chess.reset();
	boardView.render(this.chess.board());
	this.chess.loadPgn(game.pgn);
	this.moves = this.chess.history();
	game.setGameLength(this.moves.length);
	this.chess.reset();
	//renderInfo(game);
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
	//renderInfo(game);
	}
};



/*

renderInfo(game :Game) :void{
	
}
username, rating.
game: Movecounter x/max, timecontrol
result after final move


loadPgn()
history()
move()
board()
fen()
reset()
turn()
isCheckmate()
isDraw() */