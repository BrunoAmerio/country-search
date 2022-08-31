import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';

function SearchBar() {
	const {
		setSearch,
		setLanguageGroup,
		setContinentGroup,
		continentGroup,
		languageGroup,
	} = useAppContext();

	const handleClick = () => {
		setContinentGroup(value => !value);
		setLanguageGroup(value => !value);
	};

	return (
		<Container>
			<SearchContainer>
				<button
					type='button'
					style={{
						border: 'none',
						backgroundColor: 'transparent',
						cursor: 'pointer',
					}}
				>
					<img src='/icons/search.svg' alt='searchIcon' />
				</button>
				<Input
					type='text'
					placeholder='Enter the name of a country'
					onChange={e => setSearch(e.target.value)}
				/>
			</SearchContainer>

			<div style={{ display: 'flex', gap: ' 5vw' }}>
				{continentGroup ? (
					<ButtonPressed onClick={handleClick}>Continent</ButtonPressed>
				) : (
					<Button onClick={handleClick}>Continent</Button>
				)}

				{languageGroup ? (
					<ButtonPressed onClick={handleClick}>Language</ButtonPressed>
				) : (
					<Button onClick={handleClick}>Language</Button>
				)}
			</div>
		</Container>
	);
}

const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	padding-top: 10px;
`;

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 8px;
	gap: 10px;
`;

const Button = styled.button`
	border: none;
	border-radius: 4px;
	height: 30px;
	padding: 0px 3vw;
	min-width: 100px;
	font-weight: bolder;
	cursor: pointer;

	transform: translateY(-2px);
	box-shadow: 2px 3px 0px rgb(129, 129, 129);
`;

const ButtonPressed = styled.button`
	background-color: rgb(59, 149, 252);
	color: white;
	transform: translate(3px, 1px);
	border: none;
	border-radius: 4px;
	padding: 0px 3vw;
	font-weight: bolder;
	box-shadow: none;
	transform: translate(3px, 1px);
`;

const Input = styled.input`
	border: none;
	border-radius: 8px;
	height: 25px;
	width: 25vw;
	min-width: 300px;
	padding-left: 5px;

	&:focus {
		outline: none;
	}
`;

export default SearchBar;
