import { Image } from "../GalleryCategoryFilter/types";

export type GalleryData = Image[];

export type SelectedCategory = string;
export interface GalleryGridProps {
	galleryImages: GalleryData;
	selectedCategory: SelectedCategory;
}