import '../src/scss/app.scss';
import { MainLayout } from './layots/MainLayout';
import { Header } from './shared/components/Header';
import { InfoBlock } from './shared/components/Info-block';
import { ProductionInfo } from './shared/components/Production-info';

function App() {
	return (
		<>
			<MainLayout>
				<Header />
				<main>
					<InfoBlock />
					<ProductionInfo />
				</main>
			</MainLayout>
		</>
	);
}

export default App;
