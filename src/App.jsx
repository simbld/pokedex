import { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import '/src/App.css';

const pokemonList = [
	{
		name: 'bulbasaur',
		imgSrc:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
	},
	{
		name: 'charmander',
		imgSrc:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
	},
	{
		name: 'squirtle',
		imgSrc:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
	},
	{
		name: 'pikachu',
		imgSrc:
			'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
	},
	{
		name: 'mew',
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);
	const previousPokemon = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};
	const nextPokemon = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};

	return (
		<div className="App">
			<div className="container">
				<div className="card-container">
					<PokemonCard pokemon={pokemonList[pokemonIndex]} />
					<div className="button-container">
						{pokemonIndex > 0 && (
							<button className="button" onClick={previousPokemon}>
								précédent
							</button>
						)}
						{pokemonIndex < pokemonList.length - 1 && (
							<button className="button" onClick={nextPokemon}>
								suivant
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
