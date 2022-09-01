import { useAppContext } from '../context/AppContext';

// Components
import SearchBar from './SearchBar';
import CardContainer from './CardContainer';
import Pagination from './Pagination';
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
		<div style={{ position: 'relative' }}>
			<SearchBar />
			<CardContainer items={paginateItems} />
			<Pagination
				items={filterCountries.length}
				currentPage={currentPage}
				pageSize={pageSize}
				onPageChange={setCurrentPage}
			/>
		</div>
	);
}

export default Screen;
