'use client';

import { Button, Stack, Title, Group, Tooltip, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlaylistAdd } from '@tabler/icons-react';
import { QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import { use } from 'react';

import { AddNewShoppingList, ShoppingListCard } from '@components';

const queryClient = new QueryClient();
// async function fetcher(url: string) {
//   return axios.get<string[]>(url).then(res => res.data);
// }
export default function ShoppingList() {
  const [opened, { open, close }] = useDisclosure(false);

  // const { data, error } = useSWR('/api/list', fetcher);
  const handleDeleteList = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    console.log('🚀 ~ id:', e);
  };
  // server actions
  const { data } = useQuery({
    queryKey: ['/api/list'],
    queryFn: () => {
      console.log('sdgfsdgfsd');
      return axios.get('/api/list');
    }
  });
  console.log('🚀 ~ data:', data?.data);

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
        {data?.data.map((list, i) => (
          <ShoppingListCard key={list.id} list={list} index={i} handleDeleteList={handleDeleteList} />
        ))}
      </Group>
      <Button color="teal" mb={40} variant="outline" size="md" radius="md" href="/" component={Link}>
        Wróć
      </Button>
    </Stack>
  );
}
