import PropTypes from 'prop-types';

function NavBar({ pokemonIndex, setPokemonIndex, pokemonListLength }) {
	const previousPokemon = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};
	const nextPokemon = () => {
		if (pokemonIndex < pokemonListLength - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};

	return (
		<div className="NavBar">
			<div className="button-container">
				{pokemonIndex > 0 && (
					<button className="button" onClick={previousPokemon}>
						précédent
					</button>
				)}
				{pokemonIndex < pokemonListLength - 1 && (
					<button className="button" onClick={nextPokemon}>
						suivant
					</button>
				)}
			</div>
		</div>
	);
}

NavBar.propTypes = {
	pokemonIndex: PropTypes.number.isRequired,
	setPokemonIndex: PropTypes.func.isRequired,
	pokemonListLength: PropTypes.number.isRequired,
};

export default NavBar;
