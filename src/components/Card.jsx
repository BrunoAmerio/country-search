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

			<div style={{ border: '1px solid white', padding: ' 0px 10px' }}>
				<div style={{ display: ' flex', alignItems: 'baseline', gap: 10 }}>
					<p>{data.emoji}</p>
					<h2 style={{ color: 'white' }}>{data.name}</h2>
				</div>
				<p>Capital: {data.capital}</p>
				<p>Gentilic: {data.native}</p>
				<p>Currency: {data.currency}</p>
			</div>
		</div>
	);
}

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
