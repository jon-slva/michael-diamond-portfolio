import { ReactElement } from 'react';
import Slider from '../../components/Slider/Slider';
import GalleryCategoryFilter from '../../components/GalleryCategoryFilter/GalleryCategoryFilter';
import './Home.scss';


export default function Home(): ReactElement {

	return (
		<main>

			<Slider />

			<GalleryCategoryFilter />

		</main>
	);
};