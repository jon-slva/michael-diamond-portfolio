import { GalleryData } from "../../main-types";


export type SelectedCategory = string;
export interface GalleryGridProps {
	galleryImages: GalleryData;
	selectedCategory: SelectedCategory;
}