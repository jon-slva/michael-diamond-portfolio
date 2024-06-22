import React, { useState, useEffect } from 'react';
import GalleryGrid from '../GalleryGrid/GalleryGrid';
import './GalleryCategoryFilter.scss';
import galleryData from '../../data/portfolio_images.json';

export function GalleryCategoryFilter(): ReactElement {
	// State to hold unique categories
	const [categories, setCategories] = useState<string[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>('All');

	// Extract categories from galleryData
	useEffect(() => {
		const foundCategories = ['All']; // Initialize with 'All'
		galleryData.forEach(item => {
			const category = item.category; // Assuming each item has a 'category' field
			if (category && !foundCategories.includes(category)) {
				foundCategories.push(category);
			}
		});
		setCategories(foundCategories);
	}, []);

	const handleClick = (category: string) => {
		setSelectedCategory(category);
	};

	// Filter galleryData based on selectedCategory
	const filteredGalleryData = selectedCategory === 'All' ? galleryData : galleryData.filter(item => item.category === selectedCategory);

	return (
		<section className='gallery-filter'>
			<aside>
				<ul className='gallery-filter__list'>
					{categories.map((category, index) => (
						<li key={index} className='gallery-filter__list--item' onClick={() => handleClick(category)}>
							{category}
						</li>
					))}
				</ul>
			</aside>

			<GalleryGrid galleryImages={filteredGalleryData} />
		</section>
	);
}