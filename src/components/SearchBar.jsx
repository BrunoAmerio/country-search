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

	const handleClick = e => {
		const { id } = e.target;
		if (id === 'continent') {
			setContinentGroup(true);
			setLanguageGroup(false);
		} else {
			setContinentGroup(false);
			setLanguageGroup(true);
		}
	};

	return (
		<Container>
			<SearchContainer>
				<SearchButton type='button'>
					<img src='/icons/search.svg' alt='searchIcon' />
				</SearchButton>
				<Input
					type='text'
					placeholder='Enter the name of a country'
					onChange={e => setSearch(e.target.value)}
				/>
			</SearchContainer>

			<ButtonContainer>
				{continentGroup ? (
					<ButtonPressed onClick={handleClick} id='continent'>
						Continent
					</ButtonPressed>
				) : (
					<Button onClick={handleClick} id='continent'>
						Continent
					</Button>
				)}

				{languageGroup ? (
					<ButtonPressed onClick={handleClick}>Language</ButtonPressed>
				) : (
					<Button onClick={handleClick}>Language</Button>
				)}
			</ButtonContainer>
		</Container>
	);
}

const ButtonContainer = styled.div`
	display: flex;
	gap: 5vw;
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
	cursor: pointer;
`;

const Container = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
	padding-top: 10px;
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

const SearchContainer = styled.div`
	display: flex;
	align-items: center;
	background-color: white;
	border-radius: 8px;
	gap: 10px;
`;

const SearchButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
`;

export default SearchBar;
