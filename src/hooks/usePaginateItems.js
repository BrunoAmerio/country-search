import { useState, useEffect } from 'react';
import paginate from '../utils/paginate';

function usePaginateItems(filterCountries, currentPage, pageSize) {
	const [paginateItems, setPaginateItems] = useState([]);

	useEffect(() => {
		if (filterCountries) {
			setPaginateItems(paginate(filterCountries, currentPage, pageSize));
		}
	}, [currentPage, filterCountries]);

	return {
		paginateItems,
	};
}

export default usePaginateItems;
