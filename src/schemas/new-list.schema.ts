import { object, ObjectSchema, string, number, array } from 'yup';

import { AddNewListModalInputs, ListItem } from '@types';

import { minMessage, requiredMessage } from './validation-messages';

const regexExpUuid = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

export function getNewItemSchema(): ObjectSchema<ListItem> {
    return object().shape({
        id: string().matches(regexExpUuid),
        name: string().required(requiredMessage),
        category: array().of(string()).nullable(),
        unit: string(),
        quantity: number().min(0.1, minMessage(0.1))
    });
}

export function getAddNewListSchema(): ObjectSchema<AddNewListModalInputs> {
    return object().shape({
        id: string().matches(regexExpUuid),
        shoppingListName: string().required(requiredMessage),
        item: array().of(getNewItemSchema()).required(requiredMessage).min(1)
    });
}
