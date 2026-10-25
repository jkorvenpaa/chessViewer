# Chess Viewer

A minimal chess game viewer built with HTML, CSS, and TypeScript, without a frontend framework. Enter a Chess.com username to load the most recent game available in that player's public archive and replay it move by move.

Hosted on GitHub Pages, the project also served as an introduction to static site deployment.

> **Status: incomplete learning project.** This was my first web project. Its current implementation fulfilled my learning goals, so I chose to leave further development and optimization outside its scope.

## Learning goals

The goal was to understand the fundamentals of a small web application by working directly with the DOM and browser events. The scope was deliberately limited to exploring:

- Connecting page structure, styling, and application state.
- Fetching and handling data asynchronously from an external API.
- Parsing PGN (Portable Game Notation) and reconstructing chess positions.
- Separating game data, move logic, and rendering into small modules.
- Building and deploying a static website.

## Technologies

- **HTML and CSS** — page structure and styling.
- **TypeScript** — application logic and DOM manipulation.
- **Vite** — development and build tooling.
- **chess.js** — PGN parsing and chess move handling.
- **GitHub Pages** — static site hosting.

## Current functionality

- Look up a player by Chess.com username and load their latest archived game.
- Display an 8×8 chessboard with SVG pieces.
- Step through the game using **Next** and **Previous**.
- Return to the search screen using **Back**.

## How it works

The viewer requests the player's archive list from the Chess.com public API and selects the last game in the most recent monthly archive. It parses the PGN with chess.js, then reconstructs each selected position by replaying the move history from the starting position.

## Known limitations

- There is no game browser or selection of older games.
- Game information is only partially displayed; player names, ratings, time control, and a move counter are not shown.
- Error handling uses a generic “No game found” message, and empty archives are not explicitly handled.
- Replay assumes the standard starting position, so games with custom starting positions are not supported reliably.
- No automated test suite is configured.
