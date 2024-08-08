import { useState, useEffect, ReactElement } from 'react';
import galleryData from '../../data/portfolio_images.json';
import { FoundCategories, UniqueCategories, Image } from './types';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import './GalleryCategoryFilter.scss';


const formatCategoryName = (category: string): string => {
	const formatted = category
		// Insert space before capital letters, g indicates a "global" search, so all instances are replaced.
		// All incoming data should be camelCase, so this should work. 
		.replace(/([A-Z])/g, ' $1').trim()
	return formatted;
};

const fetchAndFormatCategories = (): FoundCategories => {
	const uniqueCategories: UniqueCategories = new Map();
	uniqueCategories.set('all', 'All');

	galleryData.forEach((image: Image) => {
		const formattedCategory = formatCategoryName(image.category);
		if (!uniqueCategories.has(image.category)) {
			uniqueCategories.set(image.category, formattedCategory);
		}
	});

	const foundCategories: FoundCategories = Array.from(uniqueCategories, ([key, value]) => ({ key, value }));
	return foundCategories;
};


export default function GalleryCategoryFilter(): ReactElement {
	const [selectedCategory, setSelectedCategory] = useState<string>('all')
	const [categories, setCategories] = useState<FoundCategories>([]);


	useEffect(() => {
		const storedCategories = localStorage.getItem('galleryCategories');
		if (storedCategories) {
			setCategories(JSON.parse(storedCategories));
		} else {
			const formattedCategories = fetchAndFormatCategories();
			localStorage.setItem('galleryCategories', JSON.stringify(formattedCategories));
			setCategories(formattedCategories);
		}
	}, []);

	const handleClick = (categoryKey: string): void => {
		setSelectedCategory(categoryKey);
	};


	return (
		<section className='gallery-filter'>

			<aside>
				<ul className='gallery-filter__list'>
					{
						categories.map((category: { key: string, value: string }) => {
							return (
								<li className='gallery-filter__list--item' onClick={() => { handleClick(category.key) }} key={category.key} >{category.value}</li>
							)
						})
					}
				</ul>
			</aside>

			<GalleryGrid
				// Add a skeleton UI to load while the categories are being fetched.
				galleryImages={galleryData}
				selectedCategory={selectedCategory}
			/>

		</section>
	);
};