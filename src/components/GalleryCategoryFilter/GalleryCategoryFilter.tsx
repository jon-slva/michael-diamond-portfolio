import GalleryGrid from '../GalleryGrid/GalleryGrid'
import './GalleryCategoryFilter.scss'
// import { GalleryProps } from './types'
import { ReactElement, useState } from 'react'


export default function GalleryCategoryFilter({ galleryData, foundCategories }): ReactElement {
	const [selectedCategory, setSelectedCategory] = useState('All')

	const handleClick = (categoryKey: string) => {
		alert(`clicked ${categoryKey}`);
		setSelectedCategory(categoryKey);
	};

	console.log(foundCategories)

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
	)
}