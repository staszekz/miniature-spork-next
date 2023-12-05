'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, TextInput, Stack } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import axios from 'axios';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { AddNewListModalInputs } from '@types';

import { getAddNewListSchema } from '../schemas/new-list.schema';

const today = new Intl.DateTimeFormat('pl-pl').format(new Date());

const defaultValues = {
  shoppingListName: `Lista z dnia ${today}`,
  date: new Date()
};

export const AddNewShoppingList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<AddNewListModalInputs>({
    defaultValues,
    resolver: zodResolver(getAddNewListSchema)
  });

  console.log('🚀 ~ errors:', errors);
  const onSubmit: SubmitHandler<AddNewListModalInputs> = async dataV => {
    console.log('🚀 ~ dataV:', dataV);

    try {
      const { data } = await axios<any>({
        method: 'post',
        url: '/api/list',
        data: dataV
      });
      return data;
    } catch (error) {
      throw new Error("Couldn't add new list)");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <TextInput label="Nazwa listy zakupów" {...register('shoppingListName')} />
        <Controller
          control={control}
          name="date"
          render={({ field }) => {
            return (
              <DateInput
                label="Data"
                valueFormat="YYYY MMM DD"
                placeholder="Wybierz datę"
                value={field.value}
                onChange={value => field.onChange(value)}
              />
            );
          }}
        />

        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};
