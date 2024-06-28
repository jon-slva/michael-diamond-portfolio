import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';

import galleryData from './data/portfolio_images.json';

const formatCategoryName = (category: string) => {
	const formatted = category
		.replace(/([A-Z])/g, ' $1').trim()
		.replace(/^./, (str) => str.toUpperCase());
	return formatted;
};

const uniqueCategories: Map<string, string> = new Map();
uniqueCategories.set('all', 'All');

galleryData.forEach((image: { category: string }) => {
	const formattedCategory = formatCategoryName(image.category);
	if (!uniqueCategories.has(image.category)) {
		uniqueCategories.set(image.category, formattedCategory);
	}
});

const foundCategories = Array.from(uniqueCategories, ([key, value]) => ({ key, value }));


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
