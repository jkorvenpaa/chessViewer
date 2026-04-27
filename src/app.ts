import { createLayout, createGameLayout } from './layout';
import { getLatestGame } from './chessClient';
import { Game } from './chessClient';

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
    this.gameUi.gameInfo.textContent = 'Game loaded';
    this.gameUi.board.textContent = this.game.pgn;//Board, now just holds pgn
    
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

