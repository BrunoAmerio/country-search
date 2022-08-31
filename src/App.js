import { useEffect, useState } from 'react';
import { useAppContext } from './context/AppContext';
import paginate from './utils/paginate';

// Components
import SearchBar from './components/SearchBar';
import CardContainer from './components/CardContainer';
import Pagination from './components/Pagination';

function App() {
	const { loading, error, filterCountries } = useAppContext();

	const [paginateItems, setPaginateItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 12;

	useEffect(() => {
		if (filterCountries) {
			setPaginateItems(paginate(filterCountries, currentPage, pageSize));
		}
	}, [currentPage, filterCountries]);

	if (loading)
		return <h1 style={{ textAlign: 'center', color: 'white' }}>Loading...</h1>;

	if (error)
		return (
			<h1 style={{ textAlign: 'center', color: 'white' }}>
				Something went wrong :(, reload please
			</h1>
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

export default App;

/*
	<footer
		className='footer'
		style={{
			position: 'absolute',
			width: '100%',
			bottom: '-50px',
			left: '50%',
			translate: '-50%',
			textAlign: 'center',
		}}
	>
		<p>
			This proyect was development by{' '}
			<a
				href='https://www.linkedin.com/in/bruno-amerio/'
				rel='noreferrer'
				target='_blank'
			>
				Bruno Amerio
			</a>{' '}
			for Kimche Software Engineer challenge. You can see{' '}
			<a
				href='https://github.com/BrunoAmerio/kimche-challenge'
				rel='noreferrer'
				target='_blank'
			>
				the project repository here
			</a>
		</p>
	</footer>
*/
