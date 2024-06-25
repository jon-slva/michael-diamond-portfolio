import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';

import galleryData from './data/portfolio_images.json'

const uniqueCategories: Set<string> = new Set(['All']);
galleryData.forEach((image: { category: string }) => uniqueCategories.add(image.category));
const foundCategories = Array.from(uniqueCategories);


function App() {

	return (
		<BrowserRouter
		//  basename={process.env.PUBLIC_URL}
		>
			<Nav />
			<Routes>
				<Route path='/' element={<Home galleryData={galleryData} foundCategories={foundCategories} />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
