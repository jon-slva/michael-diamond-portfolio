import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';

import galleryData from './data/portfolio_images.json';

// Function to transform camelCase to Normal Case
const formatCategoryName = (category: string) => {
	const formatted = category
		.replace(/([A-Z])/g, ' $1').trim() // Insert a space before each uppercase letter and trim any leading space
		.replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter of the resulting string
	return formatted;
};

const uniqueCategories: Map<string, string> = new Map();
uniqueCategories.set('all', 'All'); // Add the "All" category manually

galleryData.forEach((image: { category: string }) => {
	const formattedCategory = formatCategoryName(image.category);
	if (!uniqueCategories.has(image.category)) {
		uniqueCategories.set(image.category, formattedCategory);
	}
});

// Convert the Map to an array for rendering, if needed
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
