import PropTypes from 'prop-types';

function NavBar({ pokemonList, setPokemonIndex }) {
	return (
		<div className="button-container">
			<nav className="navbar">
				{pokemonList.map((pokemon, index) => (
					<button
						className="button"
						key={pokemon.name}
						onClick={() => setPokemonIndex(index)}
					>
						{pokemon.name}
					</button>
				))}
			</nav>
		</div>
	);
}

NavBar.propTypes = {
	pokemonList: PropTypes.number.isRequired,
	setPokemonIndex: PropTypes.func.isRequired,
	pokemonListLength: PropTypes.number.isRequired,
};

export default NavBar;
