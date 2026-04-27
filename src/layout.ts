export const createLayout = (root: HTMLDivElement) => {
  root.innerHTML = `
    <div class="app">
      <h1>Chess Viewer</h1>

      <div class="controls">
        <input id="username" placeholder="chess.com username" />
        <button id="loadGame">Load Game</button>
      </div>

      <div class="info">
        <div id="gameInfo"></div>
      </div>
    </div>
  `;

  const username = root.querySelector<HTMLInputElement>('#username');
  const loadBtn = root.querySelector<HTMLButtonElement>('#loadGame');
  const gameInfo = root.querySelector<HTMLDivElement>('#gameInfo');

  if (!username || !loadBtn || !gameInfo) {
    throw new Error('Layout elements missing');
  }

  return {
    username,
    loadBtn,
    gameInfo,
  };
};
export const createGameLayout = (root: HTMLDivElement) => {
  root.innerHTML = `
    <div class="app">
      <button id="backBtn">Back</button>

      <div class="viewer">
        <div id="board" class="board"></div>

        <div class="controls">
          <button id="prevBtn">Previous</button>
          <button id="nextBtn">Next</button>
        </div>

        <div class="info">
          <div id="gameInfo"></div>
          <div id="moveInfo"></div>
        </div>
      </div>
    </div>
  `;

  const board = root.querySelector<HTMLDivElement>('#board');
  const prevBtn = root.querySelector<HTMLButtonElement>('#prevBtn');
  const nextBtn = root.querySelector<HTMLButtonElement>('#nextBtn');
  const gameInfo = root.querySelector<HTMLDivElement>('#gameInfo');
  const moveInfo = root.querySelector<HTMLDivElement>('#moveInfo');
  const backBtn = root.querySelector<HTMLButtonElement>('#backBtn');

  if (!board || !prevBtn || !nextBtn || !gameInfo || !moveInfo || !backBtn) {
    throw new Error('Game layout elements missing');
  }

  return {
    board,
    prevBtn,
    nextBtn,
    gameInfo,
    moveInfo,
    backBtn,
  };
};
