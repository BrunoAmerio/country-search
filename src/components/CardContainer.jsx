import styled from 'styled-components';

import Card from './Card';

function CardContainer({ items }) {
	if (items.length) {
		return (
			<Container>
				{items.map(item => (
					<Card data={item} key={item.name} />
				))}
			</Container>
		);
	}

	return (
		<h1 style={{ textAlign: 'center', color: 'white' }}>
			We did not find anything similar :(
		</h1>
	);
}

const Container = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	justify-items: center;

	row-gap: 25px;

	height: 85vh;
	width: 90vw;
	margin: auto;
	margin-top: 10px;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		width: 10px;
	}

	&::-webkit-scrollbar-track {
		background: rgb(160, 160, 160);
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: rgb(31, 30, 30);
		border-radius: 2px;
	}

	@media (max-width: 890px) {
		grid-template-columns: 1fr !important;
	}
`;

export default CardContainer;
