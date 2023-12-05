'use client';

import { Button, Stack, Title, Group, Tooltip, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlaylistAdd } from '@tabler/icons-react';
import axios from 'axios';
import Link from 'next/link';
import useSWR from 'swr';

import { AddNewShoppingList, ShoppingListCard } from '@components';

function fetcher() {
  return axios.get('/api/list');
}
export default function ShoppingList() {
  const [opened, { open, close }] = useDisclosure(false);

  const { data, error } = useSWR('/api/list', fetcher);

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

      <Group>{data?.data.map((list, i) => <ShoppingListCard key={list.id} list={list} index={i} />)}</Group>
      <Button color="teal" mb={40} variant="outline" size="md" radius="md" href="/" component={Link}>
        Wróć
      </Button>
    </Stack>
  );
}
