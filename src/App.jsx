import { useState } from 'react';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';
import './styles/App.css';

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

	return (
		<>
			<div className="App">
				<div className="container">
					<div className="card-container">
						<PokemonCard pokemon={pokemonList[pokemonIndex]} />
						<NavBar
							pokemonIndex={pokemonIndex}
							setPokemonIndex={setPokemonIndex}
							pokemonListLength={pokemonList.length}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
