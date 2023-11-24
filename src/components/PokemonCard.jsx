/* eslint-disable react/prop-types */
function PokemonCard(props) {
	const { pokemon } = props;
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

export default PokemonCard;
