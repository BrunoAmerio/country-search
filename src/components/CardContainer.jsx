import { useState } from 'react';
import styled from 'styled-components';

// Components
import Card from './Card';
import ArrowDown from './icons/ArrowDown';
import ArrowUp from './icons/ArrowUp';

function CardContainer({ items }) {
	const [cardIndex, setCardIndex] = useState(0);

	// Funcion que enfoca la card anterior
	const moveUp = () => {
		if (window.innerWidth < 900 && cardIndex > 0) {
			const element = document.getElementById(`card${cardIndex - 1}`);
			element.scrollIntoView({ block: 'center', behavior: 'smooth' });
			setCardIndex(cardIndex - 1);
		} else if (cardIndex >= 2) {
			const element = document.getElementById(`card${cardIndex - 2}`);
			element.scrollIntoView({ block: 'center', behavior: 'smooth' });
			setCardIndex(cardIndex - 2);
		}
	};

	// Función que enfoca la card siguiente
	const moveDown = () => {
		if (window.innerWidth < 900) {
			const element = document.getElementById(`card${cardIndex + 1}`);
			element.scrollIntoView({ block: 'center', behavior: 'smooth' });
			setCardIndex(cardIndex + 1);
		} else if (cardIndex < items.length - 3) {
			const element = document.getElementById(`card${cardIndex + 2}`);
			element.scrollIntoView({ block: 'center', behavior: 'smooth' });
			setCardIndex(cardIndex + 2);
		}
	};

	if (items.length) {
		return (
			<MainContainer>
				<CardsContainer>
					{items.map((item, index) => (
						<Card data={item} id={`card${index}`} key={item.name} />
					))}
				</CardsContainer>

				<ScrollButton>
					<Button type='button' onClick={moveUp} id='test'>
						<ArrowUp />
					</Button>

					<Button type='button' onClick={moveDown} id='test'>
						<ArrowDown className={undefined} />
					</Button>
				</ScrollButton>
			</MainContainer>
		);
	}

	return <Text>We did not find anything similar :(</Text>;
}

const MainContainer = styled.div`
	display: flex;
	width: fit-content;
	margin: auto;
	position: relative;
`;

const CardsContainer = styled.div`
	display: grid;
	position: relative;
	grid-template-columns: auto auto;
	justify-items: center;
	align-items: flex-end;
	row-gap: 20px;

	height: fit-content;
	max-height: 65vh;
	width: 80vw;
	margin: 10px auto;
	padding-bottom: 50px;

	overflow-y: hidden;
	scroll-snap-type: y proximity;

	&::-webkit-scrollbar {
		width: 0px;
	}

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		width: 90vw;
	}
`;

const Button = styled.button`
	height: 50px;
	width: 50px;
	border: none;
	border-radius: 50%;
	cursor: pointer;
	padding: 0px;
	background-color: #5c5c5c71;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ScrollButton = styled.div`
	height: 100%;
	display: flex;
	position: absolute;
	flex-direction: column;
	justify-content: center;
	gap: 10vh;
	top: 0;
	right: 0;
`;

const Text = styled.h1`
	text-align: center;
	color: white;
`;

export default CardContainer;
