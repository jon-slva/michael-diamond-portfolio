import './Nav.scss'
import { NavLink } from 'react-router-dom';

export function Nav(): React.ReactElement {
	return (
		<header style={{
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		}}>
			<img src="https://placehold.co/150x80/eee/bbb?text=Logo" alt="Michael Diamond Logo" />

			<nav aria-label="Main navigation">
				<img src="https://placehold.co/50x50/eee/bbb?text=X" alt="Mobile Menu" />
				<ul style={{
					display: 'flex',
					alignContent: 'center',
				}}>
					<li>
						<NavLink to="/" className="" aria-label="Portfolio page">Portfolio</NavLink>
					</li>
					<li>
						<NavLink to="/contact" className="" aria-label="Contact page">Contact</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}