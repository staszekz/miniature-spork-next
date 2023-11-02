// import { object, string, number, array, date } from 'zod';

import { z , ZodSchema} from 'zod';

import { AddNewListModalInputs, ListItem } from '@types';

import { minMessage, requiredMessage } from './validation-messages';

const regexExpUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

export function getNewItemSchema(): ZodSchema<ListItem> {
  return z.object({
    id: z.string().regex(regexExpUuid).optional(),
    name: z.string(),
    category: z.array(z.string()).nullable(),
    unit: z.string().optional(),
    quantity: z.number().min(0.1, minMessage(0.1))
  });
}

type ListItemSchema = z.infer<typeof getNewItemSchema()>

export function getAddNewListSchema() : ZodSchema<AddNewListModalInputs>{
  return z.object({
    id: z.string().regex(regexExpUuid),
    shoppingListName: z.string(),
    date: z.date()
    // item: array().of(getNewItemSchema()).required(requiredMessage).min(1)
  });
}
