export interface Image {
	url: string;
	alt: string;
}
export interface SliderImage extends Image {
	slider: boolean;
}
export interface GalleryImage extends Image {
	category: string;
}

export type SliderProps = Image[];

export type GalleryProps = Image[];