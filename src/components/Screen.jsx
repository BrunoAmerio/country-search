import styled from 'styled-components';
import { useAppContext } from '../context/AppContext';

// Components
import SearchBar from './SearchBar';
import CardContainer from './CardContainer';
import Pagination from './Pagination';
import Footer from './Footer';
import usePaginateItems from '../hooks/usePaginateItems';

function Screen() {
	const { filterCountries, currentPage, setCurrentPage } = useAppContext();

	const pageSize = 12;
	const { paginateItems } = usePaginateItems(
		filterCountries,
		currentPage,
		pageSize
	);

	return (
		<Container>
			<SearchBar />
			<CardContainer items={paginateItems} />
			<Pagination
				items={filterCountries.length}
				currentPage={currentPage}
				pageSize={pageSize}
				onPageChange={setCurrentPage}
			/>
			<Footer />
		</Container>
	);
}

const Container = styled.div`
	position: relative;
	height: 100vh;
	min-height: 745px;
`;

export default Screen;
