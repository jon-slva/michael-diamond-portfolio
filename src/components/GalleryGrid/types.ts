export interface Image {
	src: string;
	alt: string;
	category?: string;
	thumbSrc: string;
	thumbPosX: string | number | null;
	thumbPosY: string | number | null;
	thumbScale: string | number | null;
}

export type GalleryProps = {
	galleryImages: Image[];
};