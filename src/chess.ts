import {Chess} from 'chess.js';
import {Game} from './Game';
import {BoardView} from './BoardView';

export const startGame = (game :Game, boardView :BoardView) => {

try{
const chess = new Chess();
boardView.render(chess.board());
}
catch (err){
    return;
}
//chess.loadPgn(game.pgn);
//const moves = chess.history();

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