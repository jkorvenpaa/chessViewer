import {createLayout, createGameLayout} from './layout';
import {getLatestGame} from './Game';
import {Game} from './Game';
import boardImg from '../assets/boardImg.png';
import {BoardView} from './BoardView';
import {chessMover} from './chess';
import { Chess } from 'chess.js';

export class App {
	private ui;
	private gameUi: ReturnType<typeof createGameLayout> | null = null;
	public game: Game | null = null;

	constructor(private root: HTMLDivElement) {
		this.ui = createLayout(this.root);
	}

	start(): void {
		this.ui.loadBtn.addEventListener('click', () => this.loadGame());
	}

	private async loadGame(): Promise<void> {
		const username = this.ui.username.value.trim();
		if (!username) return;

		this.ui.gameInfo.textContent = `Loading ${username}...`;
		try{
			this.game = await getLatestGame(username);
			this.ui.gameInfo.textContent = 'Game loaded';

		}
		catch (err) {
			this.ui.gameInfo.textContent = 'No game found';
			return;
		}

		try{
			this.showGameLayout();
			if (!this.gameUi)
					return;
			const boardView = new BoardView(this.gameUi.board);
			const mover = new chessMover;
			mover.startGame(this.game, boardView);
			
			this.gameUi.nextBtn.addEventListener('click', () => {
				if (this.game){
					this.game.nextMove();
					mover.chessMove(this.game, boardView);
				}
				this.gameUi!.moveInfo.textContent = 'Next clicked';
			});

			this.gameUi.prevBtn.addEventListener('click', () => {
				if (this.game){
					this.game.prevMove();
					mover.chessMove(this.game, boardView);
				}
				this.gameUi!.moveInfo.textContent = 'Previous clicked';
		});
		}
		catch (err){
				return;
		}
	}

	private showGameLayout(): void {
		if (!this.game)
				throw new Error ("no game");
		this.gameUi = createGameLayout(this.root);
		this.gameUi.moveInfo.textContent = 'Game loaded';
		this.gameUi.gameInfo.textContent = this.game.black.result;
		this.gameUi.backBtn.addEventListener('click', () => {
			this.ui = createLayout(this.root);
			this.start();
		});
	}
}


	//  this.gameUi.board.style.backgroundImage = `url(${boardImg})`;
		//   this.gameUi.board.style.backgroundSize = '100% 100%';
		// piece.src = `url(${'../assets/wQ.svg'})`;
		// piece.classList.add('piece');
		// this.gameUi.board.appendChild(piece);

