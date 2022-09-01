import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';

function Card({ data }) {
	const { continentGroup, languageGroup } = useAppContext();

	return (
		<div style={{ width: '30vw', minWidth: '350px' }}>
			{continentGroup ? (
				<h1 style={{ fontSize: '30px', padding: 0, margin: 0 }}>
					{data.continent.name}
				</h1>
			) : null}

			{/* Lo siguiente solo lo hacemos por cuestiones esteticas */}
			{languageGroup ? (
				<Ul>
					{data.languages.map((item, index) => (
						<li
							key={item.name}
							style={{ fontWeight: 'bolder', fontSize: '30px' }}
						>
							{' '}
							{index === data.languages.length - 1
								? `${item.name}`
								: `${item.name}, `}
						</li>
					))}
				</Ul>
			) : null}

			<Container style={{ padding: ' 0px 10px 5px 10px' }}>
				<div style={{ display: ' flex', alignItems: 'baseline', gap: 10 }}>
					<p>{data.emoji}</p>
					<h2 style={{ color: 'black' }}>{data.name}</h2>
				</div>
				<p>
					{' '}
					<b>Capital:</b> {data.capital}
				</p>
				<p>
					{' '}
					<b>Gentilic:</b> {data.native}
				</p>
				<p>
					{' '}
					<b>Currency:</b> {data.currency}
				</p>
			</Container>
		</div>
	);
}

const Container = styled.div`
	color: black;
	background-color: rgb(230, 230, 230);
	border-radius: 8px;
	border: none;
	scroll-snap-align: center;
`;

const Ul = styled.ul`
	display: flex;
	gap: 10px;
	list-style: none;
	padding: 0px;
	margin: 0px;
	widht: 100%;
	flex-wrap: wrap;
`;

export default Card;
