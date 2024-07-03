export interface Image {
	src: string;
	title: string;
	alt: string;
	category: string;
	thumbSrc: string;
	thumbPosX: number | string;
	thumbPosY: number | string;
	thumbScale: number | string;
}

export type GalleryData = Image[];
export type FoundCategories = { key: string, value: string }[];

export interface GalleryProps {
	galleryData: GalleryData;
	foundCategories: FoundCategories;
}

export type GalleryCategoryFilterProps = {
	galleryData: Image[];
	foundCategories: { key: string, value: string }[];
};


export type UniqueCategories = Map<string, string>;