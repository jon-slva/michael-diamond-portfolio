import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Nav } from './components/Nav/Nav'


function App() {

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
