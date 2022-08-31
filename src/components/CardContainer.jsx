import Card from './Card';

function CardContainer({ items }) {
	if (items.length) {
		return (
			<div>
				{items.map(item => (
					<Card data={item} key={item.name} />
				))}
			</div>
		);
	}

	return (
		<h1 style={{ textAlign: 'center', color: 'white' }}>
			We did not find anything similar :(
		</h1>
	);
}

export default CardContainer;
