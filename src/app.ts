import { createLayout, createGameLayout } from './layout';
import { getLatestGame } from './chessClient';
import { Game } from './chessClient';
import boardImg from '../assets/boardImg.png';

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
    this.showGameLayout();
    
    //start game here
    console.log(this.game);
    }
    catch (err) {
      this.ui.gameInfo.textContent = 'No game found';
      return;
  }
}
    private showGameLayout(): void {
    if (!this.game)
        return;
    this.gameUi = createGameLayout(this.root);
    this.gameUi.moveInfo.textContent = 'Game loaded';
    this.gameUi.board.style.backgroundImage = `url(${boardImg})`;
    this.gameUi.board.style.backgroundSize = '100% 100%';
    const piece = document.createElement('img');
    piece.src = `url(${'../assets/wQ.svg'})`;
    piece.classList.add('piece');

    this.gameUi.board.appendChild(piece);

    this.gameUi.gameInfo.textContent = this.game.white.username;
    this.gameUi.gameInfo.textContent = this.game.white.result;//Board, now just holds pgn
//Board, now just holds pgn
    this.gameUi.gameInfo.textContent = this.game.black.username;//Board, now just holds pgn
    this.gameUi.gameInfo.textContent = this.game.black.result;
    this.gameUi.nextBtn.addEventListener('click', () => {
      this.gameUi!.moveInfo.textContent = 'Next clicked';
    });

    this.gameUi.prevBtn.addEventListener('click', () => {
      this.gameUi!.moveInfo.textContent = 'Previous clicked';
    });

    this.gameUi.backBtn.addEventListener('click', () => {
      this.ui = createLayout(this.root);
      this.start();
    });
  }
}

