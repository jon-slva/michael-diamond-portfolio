import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UniqueCategories, FoundCategories } from './main-types';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import galleryData from './data/portfolio_images.json';
import './App.scss';


const formatCategoryName = (category: string) => {
	const formatted = category
		// Insert space before capital letters, g indicates a "global" search, so all instances are replaced.
		// All incoming data should be camelCase, so this should work. 
		.replace(/([A-Z])/g, ' $1').trim()
	return formatted;
};

const uniqueCategories: UniqueCategories = new Map();
uniqueCategories.set('all', 'All');

galleryData.forEach((image: { category: string }) => {
	const formattedCategory = formatCategoryName(image.category);
	if (!uniqueCategories.has(image.category)) {
		uniqueCategories.set(image.category, formattedCategory);
	}
});

const foundCategories: FoundCategories = Array.from(uniqueCategories, ([key, value]) => ({ key, value }));


export default function App(): ReactElement {

	return (
		<BrowserRouter
		//  basename={process.env.PUBLIC_URL}
		>
			<Nav />
			<Routes>
				<Route
					path='/'
					element={
						<Home
							galleryData={galleryData}
							foundCategories={foundCategories}
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};