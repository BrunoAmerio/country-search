import { useQuery } from '@apollo/client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import GET_COUNTRIES from '../config/Queries';

const AppContext = createContext();

// Aqui manejaremos las entradas de texto, y en base a ello modificaremos el arreglo principal contenedor de los paises
function AppContextProvider({ children }) {
	const { loading, error, data } = useQuery(GET_COUNTRIES);

	const [search, setSearch] = useState('');
	const [filterCountries, setFilterCountries] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	// Estados que indican que información detallar en las Card's
	const [languageGroup, setLanguageGroup] = useState(false);
	const [continentGroup, setContinentGroup] = useState(true);

	// Controlamos cada cambio en el buscador
	useEffect(() => {
		if (!search.length && data) {
			setFilterCountries(data.countries);
		} else if (search.length) {
			setFilterCountries(
				data.countries.filter(item =>
					item.name.toLowerCase().includes(search.trim().toLowerCase())
				)
			);
			setCurrentPage(1);
		}
	}, [search, data]);

	const values = useMemo(
		() => ({
			filterCountries,
			search,
			currentPage,
			setCurrentPage,
			setSearch,
			languageGroup,
			setLanguageGroup,
			continentGroup,
			setContinentGroup,
			loading,
			error,
		}),
		[search, filterCountries, continentGroup, languageGroup, currentPage]
	);

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('Solo puede usar useAppContext dentro de su Provider');
	}

	return context;
};

export default AppContextProvider;
