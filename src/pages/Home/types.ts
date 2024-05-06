export interface Image {
	url: string;
	alt: string;
	category: string;
	slider: boolean;
}
export interface SliderProps {
	sliderImages: Image[] | null;
}
export interface GalleryProps {
	galleryImages: Image[];
}

