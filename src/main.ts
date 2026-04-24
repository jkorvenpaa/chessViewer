/*import './style.css';

const app = document.getElementById("app");

if (!app) {
  throw new Error("App element not found");
}

app.textContent = "Hello chess viewer";*/

import './style.css';
import { createLayout } from './layout';
import { getLatestGame } from './chessClient';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('App not found');

const ui = createLayout(app);

 

