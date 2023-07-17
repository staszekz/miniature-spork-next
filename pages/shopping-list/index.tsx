'use client';
import {
    Box,
    Button,
    Paper,
    Stack,
    Table,
    Title,
    Text,
    Group,
    Tooltip,
    Container,
    Card,
    Image,
    Badge
} from '@mantine/core';

import styles from './styles.module.css';

import Link from 'next/link';
import { lists } from '../../utils/data';
import { IconPlaylistAdd } from '@tabler/icons-react';

export default function ShoppingList() {
    return (
        <Stack>
            <Title ta="center" order={1}>
                Listy Zakupów
            </Title>
            <Tooltip label="Dodaj nową listę zakupów">
                <Button color="teal">
                    <IconPlaylistAdd />
                </Button>
            </Tooltip>

            <Group>
                {lists.map((list, i) => (
                    <Card shadow="sm" padding="lg" radius="md" withBorder bg={'teal.2'} w={350}>
                        <Card.Section>
                            <Image
                                alt="List if shopping items"
                                height={120}
                                withPlaceholder
                                src="/images/shopping-list.jpg"
                            />
                        </Card.Section>
                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500}>Lista {i + 1}:</Text>
                            <Badge color="pink" variant="light">
                                Nowa
                            </Badge>
                        </Group>
                    </Card>
                ))}
            </Group>
            <Button color="teal" mb={40} variant="outline" size="md" radius="md" href="/" component={Link}>
                Wróć
            </Button>
        </Stack>
    );
}
