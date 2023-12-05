// 'use client';

// import { yupResolver } from '@hookform/resolvers/yup';
// import {
//     Button,
//     TextInput,
//     Stack,
//     NumberInput,
//     ActionIcon,
//     NumberInputHandlers,
//     Flex,
//     Select,
//     MultiSelect
// } from '@mantine/core';
// import axios from 'axios';
// import { useRef, useState } from 'react';
// import { useForm, SubmitHandler, Controller } from 'react-hook-form';

// import { AddNewListModalInputs } from '@types';

// import { getAddNewListSchema } from '../schemas/new-list.schema';

// const test = new Intl.DateTimeFormat('pl-pl').format(new Date());
// const defaultValues = {
//     shoppingListName: `Lista z dnia ${test}`,
//     item: [
//         {
//             name: '',
//             category: [],
//             unit: '',
//             quantity: 0
//         }
//     ]
// };

// export const AddNewShoppingItem = () => {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         control
//     } = useForm<AddNewListModalInputs>({
//         defaultValues,
//         resolver: yupResolver(getAddNewListSchema())
//     });
//     const handlers = useRef<NumberInputHandlers>({ increment: () => {}, decrement: () => {} });
//     const [dataMulti, setData] = useState([
//         { value: 'react', label: 'React' },
//         { value: 'ng', label: 'Angular' }
//     ]);

//     const onSubmit: SubmitHandler<AddNewListModalInputs> = async (dataV) => {
//         const { data } = await axios.post('/api/list', dataV);
//         return data;
//     };

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Stack>
//                 <TextInput label="Nazwa listy zakupów" {...register('shoppingListName')} />

//                 <TextInput
//                     label="Nazwa produktu"
//                     error={errors?.item?.[0]?.name?.message}
//                     {...register(`item.${0}.name`)}
//                 />
//                 <Controller
//                     control={control}
//                     name={`item.${0}.category`}
//                     render={(props) => (
//                         <MultiSelect
//                             label="Kategoria"
//                             error={errors?.item?.[0]?.category?.message}
//                             data={dataMulti}
//                             placeholder="Wybierz kategorię ..."
//                             searchable
//                             creatable
//                             getCreateLabel={(query) => `+ Nowa kategoria: ${query}`}
//                             onCreate={(query) => {
//                                 const item = { value: query, label: query };
//                                 setData((current) => [...current, item]);
//                                 return item;
//                             }}
//                             {...register(`item.${0}.category`)}
//                             value={props.field.value}
//                             onChange={props.field.onChange}
//                         />
//                     )}
//                 />
//                 <Flex gap={12} justify="center" align="flex-end">
//                     <Controller
//                         control={control}
//                         name={`item.${0}.unit`}
//                         render={(props) => (
//                             <Select
//                                 data={[
//                                     { value: 'kg', label: 'kg' },
//                                     { value: 'pieces', label: 'szt.' }
//                                 ]}
//                                 label="Jednostka"
//                                 {...register(`item.${0}.unit`)}
//                                 value={props.field.value}
//                                 onChange={props.field.onChange}
//                             />
//                         )}
//                     />
//                     <Controller
//                         control={control}
//                         name={`item.${0}.quantity`}
//                         render={(props) => (
//                             <>
//                                 <ActionIcon size={36} variant="default" onClick={() => handlers?.current?.decrement()}>
//                                     –
//                                 </ActionIcon>
//                                 <NumberInput
//                                     w="100%"
//                                     hideControls
//                                     label="Ilość"
//                                     precision={2}
//                                     min={0}
//                                     defaultValue={0}
//                                     handlersRef={handlers}
//                                     step={0.1}
//                                     error={errors?.item?.[0]?.quantity?.message}
//                                     {...register(`item.${0}.quantity`)}
//                                     onChange={props.field.onChange}
//                                 />
//                                 <ActionIcon size={36} variant="default" onClick={() => handlers?.current?.increment()}>
//                                     +
//                                 </ActionIcon>
//                             </>
//                         )}
//                     />
//                 </Flex>
//                 <Button type="submit">Submit</Button>
//             </Stack>
//         </form>
//     );
// };
