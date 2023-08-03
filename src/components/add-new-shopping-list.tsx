'use client';

import {
    Button,
    TextInput,
    Stack,
    NumberInput,
    ActionIcon,
    NumberInputHandlers,
    Flex,
    Select,
    MultiSelect
} from '@mantine/core';
import { useRef, useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

type Inputs = {
    shoppingListName: string;
    item: string;
    type: string;
    unit: string;
    quantity: number;
};

export const AddNewShoppingList = () => {
    const form = useForm<Inputs>();
    const handlers = useRef<NumberInputHandlers>(null);
    const [value, setValue] = useState<number | ''>(0);
    const [selected, setSelected] = useState({ value: '', label: '' });
    const [dataMulti, setData] = useState([
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' }
    ]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        // getValues,
        control
    } = form;
    const test = new Intl.DateTimeFormat('pl-pl').format(new Date());

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    // const values = getValues();
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <TextInput
                    label="Nazwa listy zakupów"
                    defaultValue={`Lista z dnia ${test}`}
                    {...register('shoppingListName')}
                />

                {/* include validation with required or other standard HTML validation rules */}
                <TextInput
                    label="Nazwa produktu"
                    error={errors.item?.message}
                    {...register('item', { required: 'Field is required' })}
                />

                <MultiSelect
                    label="Kategoria"
                    error={errors.type?.message}
                    data={dataMulti}
                    placeholder="Wybierz kategorię ..."
                    searchable
                    creatable
                    getCreateLabel={(query) => `+ Nowa kategoria: ${query}`}
                    onCreate={(query) => {
                        const item = { value: query, label: query };
                        setData((current) => [...current, item]);
                        return item;
                    }}
                    {...register('type', { required: 'Field is required' })}
                />
                <Flex gap={12} justify="center" align="flex-end">
                    <Controller
                        control={control}
                        name="unit"
                        render={(props) => (
                            <Select
                                data={[
                                    { value: 'kg', label: 'kg' },
                                    { value: 'pieces', label: 'szt.' }
                                ]}
                                label="Jednostka"
                                value={selected.value}
                                {...register('unit', { required: 'Field is required' })}
                                {...props}
                                onChange={(val) => setSelected(val)}
                            />
                        )}
                    />
                    <ActionIcon size={36} variant="default" onClick={() => handlers.current.decrement()}>
                        –
                    </ActionIcon>
                    <NumberInput
                        w="100%"
                        hideControls
                        label="Ilość"
                        handlersRef={handlers}
                        precision={2}
                        defaultValue={0}
                        value={value}
                        min={0}
                        step={0.1}
                        error={errors.quantity?.message}
                        {...register('quantity', { required: 'Field is required', min: 0 })}
                        onChange={(val) => setValue(val)}
                    />
                    <ActionIcon size={36} variant="default" onClick={() => handlers.current.increment()}>
                        +
                    </ActionIcon>
                </Flex>
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    );
};
