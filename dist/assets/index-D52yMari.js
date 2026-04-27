(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const c=n=>{n.innerHTML=`
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
  `;const e=n.querySelector("#username"),o=n.querySelector("#loadGame"),r=n.querySelector("#gameInfo");if(!e||!o||!r)throw new Error("Layout elements missing");return{username:e,loadBtn:o,gameInfo:r}},l=n=>{n.innerHTML=`
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
  `;const e=n.querySelector("#board"),o=n.querySelector("#prevBtn"),r=n.querySelector("#nextBtn"),t=n.querySelector("#gameInfo"),i=n.querySelector("#moveInfo"),s=n.querySelector("#backBtn");if(!e||!o||!r||!t||!i||!s)throw new Error("Game layout elements missing");return{board:e,prevBtn:o,nextBtn:r,gameInfo:t,moveInfo:i,backBtn:s}};class u{url="";moveIndex=0;pgn="";time_control="";end_time=0;white={username:"",rating:0,result:""};black={username:"",rating:0,result:""};setGame(e){this.url=e.url,this.pgn=e.pgn,this.time_control=e.time_control,this.end_time=e.end_time,this.white=e.white,this.black=e.black}}const m=async n=>{const e=await fetch(`https://api.chess.com/pub/player/${n}/games/archives`);if(!e.ok)throw new Error("Failed to fetch player archive");const o=await e.json(),r=o.archives[o.archives.length-1],t=await fetch(r);if(!t.ok)throw new Error("Failed to fetch game data");const i=await t.json(),s=i.games[i.games.length-1],a=new u;return a.setGame(s),a};class h{constructor(e){this.root=e,this.ui=c(this.root)}root;ui;gameUi=null;game=null;start(){this.ui.loadBtn.addEventListener("click",()=>this.loadGame())}async loadGame(){const e=this.ui.username.value.trim();if(e){this.ui.gameInfo.textContent=`Loading ${e}...`;try{this.game=await m(e),this.ui.gameInfo.textContent="Game loaded",this.showGameLayout(),console.log(this.game)}catch{this.ui.gameInfo.textContent="No game found";return}}}showGameLayout(){this.game&&(this.gameUi=l(this.root),this.gameUi.gameInfo.textContent="Game loaded",this.gameUi.board.textContent=this.game.pgn,this.gameUi.nextBtn.addEventListener("click",()=>{this.gameUi.moveInfo.textContent="Next clicked"}),this.gameUi.prevBtn.addEventListener("click",()=>{this.gameUi.moveInfo.textContent="Previous clicked"}),this.gameUi.backBtn.addEventListener("click",()=>{this.ui=c(this.root),this.start()}))}}const d=document.querySelector("#app");if(!d)throw new Error("App not found");const f=new h(d);f.start();
