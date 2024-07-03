import { useState, ReactElement } from 'react';
import { GalleryProps } from '../../main-types';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import './GalleryCategoryFilter.scss';



export default function GalleryCategoryFilter({ galleryData, foundCategories }: GalleryProps): ReactElement {
	const [selectedCategory, setSelectedCategory] = useState<string>('All')


	const handleClick = (categoryKey: string) => {
		alert(`clicked ${categoryKey}`);
		setSelectedCategory(categoryKey);
	};


	return (
		<section className='gallery-filter'>

			<aside>
				<ul className='gallery-filter__list'>
					{
						foundCategories.map((category: { key: string, value: string }) => {
							return (
								<li className='gallery-filter__list--item' onClick={() => { handleClick(category.key) }} key={category.key} >{category.value}</li>
							)
						})
					}
				</ul>
			</aside>

			<GalleryGrid
				galleryImages={galleryData}
				selectedCategory={selectedCategory}
			/>

		</section>
	);
};