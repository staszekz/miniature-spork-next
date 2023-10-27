import { DateValue } from '@mantine/dates';
import { StaticImageData } from 'next/image';

export type ListItem = {
  id?: string;
  name: string;
  category?: string[];
  unit?: string;
  quantity?: number;
};
export type AddNewListModalInputs = {
  id?: string;
  shoppingListName: string;
  date: DateValue;
};
export type ListElement = {
  id: string;
  items: ListItem[];
  image?: string | StaticImageData;
};
export type CardProps = {
  list: ListElement;
  index: number;
};
