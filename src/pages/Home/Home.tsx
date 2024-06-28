// import { useState } from 'react'
import GalleryCategoryFilter from '../../components/GalleryCategoryFilter/GalleryCategoryFilter'
import Slider from '../../components/Slider/Slider'
import './Home.scss'
// import { GalleryProps } from './types';


export default function Home({ galleryData, foundCategories }): React.ReactElement {


	return (
		<main>

			<Slider />

			<GalleryCategoryFilter galleryData={galleryData} foundCategories={foundCategories} />

		</main>
	)
}