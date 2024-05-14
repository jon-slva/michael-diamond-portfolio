export interface Image {
	url: string;
	alt: string;
	category?: string;
}

export type GalleryProps = {
	galleryImages: Image[]
};