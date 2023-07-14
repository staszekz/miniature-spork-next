'use client';
import Image from 'next/image';
import { Box, Button, Paper, Stack, Table, Title, Text, Group, Tooltip, Container } from '@mantine/core';
import ShoppingImage from '../../../public/images/shopping-list.jpg';

import styles from './styles.module.css';

import Link from 'next/link';
import { lists } from './data';
import { IconPlaylistAdd } from '@tabler/icons-react';

export default function ShoppingList() {
    return (
        <Stack justify="space-between" h="100%" w={'100%'} p={20}>
            <Group justify="center" gap="xl">
                <Title ta="center" order={1}>
                    Listy Zakupów
                </Title>
                <Tooltip label="Dodaj nową listę zakupów">
                    <Button color="teal">
                        <IconPlaylistAdd />
                    </Button>
                </Tooltip>
            </Group>

            <Group justify="center" gap="xl">
                {lists.map((list, i) => (
                    <Paper p={10} bg={'teal.2'} w={350}>
                        <Box className={styles.imageContainer} mx="auto">
                            <Text fw={700} mb={10} c={'gray.8'}>
                                Lista {i + 1}:
                            </Text>
                            <Image
                                fill
                                className={styles.image}
                                loading="lazy"
                                placeholder="blur"
                                alt="Picture of the author"
                                src={list.image}
                            />
                        </Box>
                        <Table c={'gray.9'}>
                            <Table.Thead>
                                <Table.Tr>
                                    <Table.Th>#</Table.Th>
                                    <Table.Th>Produkt</Table.Th>
                                    <Table.Th>Cena</Table.Th>
                                    <Table.Th>Kategoria</Table.Th>
                                </Table.Tr>
                            </Table.Thead>
                            {list.items?.map(({ id, name, price, currency, category, image }, index) => {
                                return (
                                    <Table.Tbody>
                                        <Table.Tr key={id}>
                                            <Table.Td>{index + 1}</Table.Td>

                                            <Table.Td>{name}</Table.Td>
                                            <Table.Td>
                                                {price} {currency}
                                            </Table.Td>
                                            <Table.Td>{category}</Table.Td>
                                        </Table.Tr>
                                    </Table.Tbody>
                                );
                            })}
                        </Table>
                    </Paper>
                ))}
            </Group>
            <Button color="teal" mb={40} variant="outline" size="md" radius="md" href="/" component={Link}>
                Wróć
            </Button>
        </Stack>
    );
}
