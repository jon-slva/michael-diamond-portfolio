import { ImageWithId } from "../GalleryCategoryFilter/types";

export type GalleryData = ImageWithId[];

export type SelectedCategory = string;
export interface GalleryGridProps {
	galleryImages: GalleryData;
	selectedCategory: SelectedCategory;
}