import _ from 'lodash';

function Pagination({ items, pageSize, currentPage, onPageChange }) {
	const pageCount = items / pageSize;
	// En caso de que solamente obtengamos una página no mostramos nada
	if (Math.ceil(pageCount) === 1) return null;

	console.log('Hay que usar:', currentPage);
	// Caso contrario, obtenemos la cantidad de páginas que tendríamos según la ctd. de items que se muestran en cada una de ellas
	const pages = _.range(1, pageCount + 1);

	return (
		<div>
			{pages.map(page => (
				<button key={page} onClick={() => onPageChange(page)} type='button'>
					{page}
				</button>
			))}
		</div>
	);
}

export default Pagination;
