import './Nav.scss'
import { NavLink } from 'react-router-dom';


export default function Nav(): React.ReactElement {

	return (
		<header className='header'>

			<img
				src="https://placehold.co/150x80/eee/bbb?text=Logo"
				alt="Michael Diamond Logo"
				className='header__logo'
			/>


			<nav aria-label="Main navigation" className='nav'>

				<img
					src="https://placehold.co/50x50/eee/bbb?text=X"
					alt="Mobile Menu" className='nav__mobile-menu-btn'
				/>

				<ul className="nav__menu" >
					<li>
						<NavLink to="/" className="nav__menu--item" aria-label="Portfolio page">Portfolio</NavLink>
					</li>
					<li>
						<NavLink to="/contact" className="nav__menu--item" aria-label="Contact page">Contact</NavLink>
					</li>
				</ul>

			</nav>

		</header >
	);
}