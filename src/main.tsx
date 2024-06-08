import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import './styles/partials/_reset.scss'
import './styles/partials/_global.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>,
)
