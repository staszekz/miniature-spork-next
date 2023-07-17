'use client';
import { Button, Stack, Table, Title, Text, Group, Tooltip, Card, Badge, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { IconPlaylistAdd } from '@tabler/icons-react';

import { AddNewShoppingList, ShoppingListCard } from '@components';
import { lists } from '@utils';

export default function ShoppingList() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <Stack align="center" justify="space-between" mih="100vh">
            <Modal opened={opened} onClose={close} centered>
                <AddNewShoppingList />
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
                {lists.map((list, i) => (
                    <ShoppingListCard list={list} index={i} />
                ))}
            </Group>
            <Button color="teal" mb={40} variant="outline" size="md" radius="md" href="/" component={Link}>
                Wróć
            </Button>
        </Stack>
    );
}