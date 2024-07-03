import { ReactElement } from 'react';
import { GalleryProps } from '../../main-types';
import Slider from '../../components/Slider/Slider';
import GalleryCategoryFilter from '../../components/GalleryCategoryFilter/GalleryCategoryFilter';
import './Home.scss';


export default function Home({ galleryData, foundCategories }: GalleryProps): ReactElement {

	return (
		<main>

			<Slider />

			<GalleryCategoryFilter
				galleryData={galleryData}
				foundCategories={foundCategories}
			/>

		</main>
	);
};