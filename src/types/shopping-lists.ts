import { StaticImageData } from 'next/image';

export type CardProps = {
    list: ListElement;
    index: number;
};
export type ListElement = {
    id: string,
    items: Item[],
    image?: string | StaticImageData;
};
export type Item = {
    id: number | string;
    name: string;
    price: number;
    currency?: string;
    category?: string;
    image?: string | StaticImageData;
};
