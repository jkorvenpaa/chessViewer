
type Player = {
	username: string;
	rating: number;
	result: string;
};

export class Game {
	url: string = '';
	pgn: string = '';
	time_control: string = '';
	end_time: number = 0;
	white: Player = { username: '', rating: 0, result: '' };
	black: Player = { username: '', rating: 0, result: ''};

	setGame(rawGame: any): void {
    	this.url = rawGame.url;
    	this.pgn = rawGame.pgn;
    	this.time_control = rawGame.time_control;
    	this.end_time = rawGame.end_time;
    	this.white = rawGame.white;
    	this.black = rawGame.black;
  }
};

	export const getLatestGame = async (playerName: string): Promise<Game> => {
	const playerArchive = await fetch (`https://api.chess.com/pub/player/${playerName}/games/archives`);
	if (!playerArchive.ok) {
		throw new Error('Failed to fetch player archive');
	}
	const data = await playerArchive.json();
	const gameDay:string = data.archives[data.archives.length - 1];
	const gameDayUrl = await fetch(gameDay);
	if (!gameDayUrl.ok) {
		throw new Error('Failed to fetch game data');
	}
	const gameData = await gameDayUrl.json();
	const rawGame = gameData.games[gameData.games.length - 1];
	const game = new Game;
	game.setGame(rawGame);

	return game;
}

/*
game example:
{
  url: "https://www.chess.com/game/live/123456",
  pgn: "[Event \"Live Chess\"] 1. e4 e5 2. Nf3 Nc6 ...",
  time_control: "600",
  end_time: 1710000000,

  white: {
	username: "player1",
	rating: 1500,
	result: "win"
  },

  black: {
	username: "player2",
	rating: 1450,
	result: "checkmated"
  }
}*/