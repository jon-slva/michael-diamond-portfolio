import { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import './App.scss';


export default function App(): ReactElement {

	return (
		<BrowserRouter
		//  basename={process.env.PUBLIC_URL}
		>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};