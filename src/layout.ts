export const createLayout = (root: HTMLDivElement) => {
  root.innerHTML = `
    <div class="app">
      <h1>Chess Viewer</h1>

      <div class="controls">
        <input id="username" placeholder="chess.com username" />
        <button id="loadGame">Load Game</button>
        <button id="prevBtn">Previous</button>
        <button id="nextBtn">Next</button>
      </div>

      <div class="viewer">
        <div id="board" class="board"></div>

        <div class="info">
          <div id="gameInfo"></div>
          <div id="moveInfo"></div>
        </div>
      </div>
    </div>
  `;

  // 🔥 Query INSIDE layout (correct place)
  const board = root.querySelector<HTMLDivElement>('#board');
  const loadBtn = root.querySelector<HTMLButtonElement>('#loadGame');
  const prevBtn = root.querySelector<HTMLButtonElement>('#prevBtn');
  const nextBtn = root.querySelector<HTMLButtonElement>('#nextBtn');
  const usernameInput = root.querySelector<HTMLInputElement>('#username');

  if (!board || !loadBtn || !prevBtn || !nextBtn || !usernameInput) {
    throw new Error('Layout elements missing');
  }

  // 🔥 Return everything cleanly
  return {
    board,
    loadBtn,
    prevBtn,
    nextBtn,
    usernameInput,
  };
};