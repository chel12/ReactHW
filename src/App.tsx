import '../src/scss/app.scss';
import { MainLayout } from './layots/MainLayout';
import { Header } from './shared/components/Header';
import { InfoBlock } from './shared/components/Info-block';


function App() {
	return (
		<>
			<MainLayout>
				<Header />
				<main>
					<InfoBlock />
				</main>
			</MainLayout>
		</>
	);
}

export default App;
