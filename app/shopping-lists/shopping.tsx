'use client';

import { Button, Stack, Title, Group, Tooltip, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlaylistAdd } from '@tabler/icons-react';
import { QueryClient, useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { AddNewShoppingList, ShoppingListCard } from '@components';

// import { getProducts } from '../../src/components/shopping-list-async-wrapper';

const queryClient = new QueryClient();
// async function fetcher(url: string) {
//   return axios.get<string[]>(url).then(res => res.data);
// }

// export async function getProducts(host: string = 'localhost:3000') {
//   try {
//     const res = await axios.get(`http://${host}/api/list`);
//     return res.data;
//   } catch (err) {
//     const axiosError = err as AxiosError;
//     throw new Error(axiosError.message);
//   }
// }

export default function ShoppingList() {
  const [opened, { open, close }] = useDisclosure(false);
  const { data } = useQuery({
    queryKey: ['lista-zakupow']
    // queryFn: () => getProducts()
  });

  // console.log('sfsdf', data);
  return (
    <Stack align="center" justify="space-between">
      <Modal opened={opened} onClose={close} centered closeOnClickOutside={false}>
        <AddNewShoppingList onClose={close} />
      </Modal>
      <Group>
        <Title ta="center" order={1}>
          Listy Zakupów
        </Title>
        <Tooltip label="Dodaj nową listę zakupów">
          <Button color="teal">
            <IconPlaylistAdd onClick={open} />
          </Button>
        </Tooltip>
      </Group>

      <Group>
        {/* {data?.map((list, i) => <ShoppingListCard key={list.id} list={list} index={i} handleDeleteList={() => null} />)} */}
      </Group>
      <Button color="teal" mb={40} variant="outline" size="md" radius="md" href="/" component={Link}>
        Wróć
      </Button>
    </Stack>
  );
}
