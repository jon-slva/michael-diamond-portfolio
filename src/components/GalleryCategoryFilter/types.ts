export interface Image {
	src: string;
	alt: string;
	category?: string;
}

export type GalleryProps = {
	galleryImages: Image[];
};