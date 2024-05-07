export interface Image {
	url: string;
	alt: string;
}
export interface ExtendedImage extends Image {
	category: string;
	slider: boolean;
}

export type SliderProps = Image[];

export type GalleryProps = Image[];

