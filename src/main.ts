/*import './style.css';

const app = document.getElementById("app");

if (!app) {
  throw new Error("App element not found");
}

app.textContent = "Hello chess viewer";*/

import './style.css';
import { App } from './app';

const root = document.querySelector<HTMLDivElement>('#app');
if (!root) throw new Error('App not found');
const app = new App(root);
app.start();
