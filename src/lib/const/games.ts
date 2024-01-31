type Game = {
	id: string;
	name: string;
	description: string;
	embedUrl: string;
	coverUrl: string;
};

export const games: Game[] = [
	{
		id: 'flip-coin',
		name: 'Flip Coin',
		description: 'Flip a coin and see if you win!',
		embedUrl: 'https://agam-w.github.io/coinflip-game',
		coverUrl: '/images/flipcoin.png'
	},
	{
		id: 'lucky-wheel',
		name: 'Lucky Wheel',
		description: 'Spin the wheel and see if you win!',
		embedUrl: 'https://agam-w.github.io/wheel-game',
		coverUrl: '/images/luckywheel.png'
	}
];

// get game by id
export const getGame = (id: string) => {
	return games.find((game) => game.id === id);
};
