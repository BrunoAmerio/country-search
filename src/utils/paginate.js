import _ from 'lodash';

const paginate = (items, pageNumber, pageSize) => {
	// Como se trata de arreglos y se cuenta desde 0 le restamos uno
	const startIndex = (pageNumber - 1) * pageSize;

	// Le pasamos el arreglo de los items, y dividimos el arreglo desde startIndex hasta la cantidad de elementos que se deben mostrar
	return _(items).slice(startIndex).take(pageSize).value();
};

export default paginate;
