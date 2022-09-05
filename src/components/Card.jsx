import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';

function Card({ data, id }) {
	const { continentGroup, languageGroup } = useAppContext();

	return (
		<MainContainer id={id}>
			{continentGroup ? <H1>{data.continent.name}</H1> : null}

			{/* Lo siguiente solo lo hacemos por cuestiones esteticas */}
			{languageGroup ? (
				<Ul>
					{data.languages.map((item, index) => (
						<Li key={item.name}>
							{' '}
							{index === data.languages.length - 1
								? `${item.name}`
								: `${item.name}, `}
						</Li>
					))}
				</Ul>
			) : null}

			<DataContainer>
				<Div>
					<p>{data.emoji}</p>
					<h2 style={{ color: 'black' }}>{data.name}</h2>
				</Div>
				<p>
					{' '}
					<b>In native language:</b> {data.native || 'None'}
				</p>
				<p>
					{' '}
					<b>Capital:</b> {data.capital || 'None'}
				</p>
				<p>
					{' '}
					<b>Currency:</b> {data.currency || 'None'}
				</p>
			</DataContainer>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	width: 30vw;
	min-width: 350px;
`;

const DataContainer = styled.div`
	padding: 0px 10px 5px 10px;
	color: black;
	background-color: rgb(230, 230, 230);
	border-radius: 8px;
	border: none;
	scroll-snap-align: center;
`;

const Div = styled.div`
	display: flex;
	align-ttems: baseline;
	gap: 10px;
`;

const H1 = styled.h1`
	font-size: 30px;
	padding: 0;
	margin: 0;
`;

const Li = styled.li`
	font-weight: bolder;
	font-size: 30px;
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
