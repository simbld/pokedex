import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {
	const pictureDisplay = pokemon.imgSrc ? (
		<img
			className="card-img"
			src={pokemon.imgSrc}
			alt={`Pokemon ${pokemon.name}`}
		/>
	) : (
		<p>???</p>
	);
	return (
		<figure className="card">
			{pictureDisplay}
			<figcaption>{pokemon.name}</figcaption>
		</figure>
	);
}

PokemonCard.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imgSrc: PropTypes.string,
	}).isRequired,
};

export default PokemonCard;
