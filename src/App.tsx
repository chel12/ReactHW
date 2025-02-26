import '../src/scss/app.scss';
import { MainLayout } from './layots/MainLayout';
import { Header } from './shared/components/Header';

function App() {
	return (
		<>
			<MainLayout>
				<Header/>
			</MainLayout>
		</>
	);
}

export default App;
