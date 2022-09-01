import { useAppContext } from './context/AppContext';

import Screen from './components/Screen';

function App() {
	const { loading, error } = useAppContext();

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
			<Screen />
		</div>
	);
}

export default App;
