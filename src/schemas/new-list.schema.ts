import { z } from 'zod';

import { minMessage, requiredMessage } from './validation-messages';

const regexExpUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

export function getNewItemSchema() {
  return z.object({
    id: z.string().regex(regexExpUuid).optional(),
    name: z.string(),
    category: z.array(z.string()).nullable(),
    unit: z.string().optional(),
    quantity: z.number().min(0.1, minMessage(0.1))
  });
}
const newItemSchema = getNewItemSchema();
export type NewItemSchema = z.infer<typeof newItemSchema>;

export const getAddNewListSchema = z.object({
  id: z.string().regex(regexExpUuid).optional(),
  shoppingListName: z.string(),
  date: z.date()
  // item: array().of(getNewItemSchema()).required(requiredMessage).min(1)
});
export type AddNewListSchema = z.infer<typeof getAddNewListSchema>;

// yfsdgfjksajhgfjksdgfjkgj
