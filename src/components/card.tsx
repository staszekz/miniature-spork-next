import { Card, Group, Image, Text, Badge, Table } from '@mantine/core';
import React from 'react';
import { CardProps } from '@types';
import { ShoppingListTable } from '@components';

export function ShoppingListCard({ list, index }: CardProps) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder bg={'teal.2'} w={350}>
            <Card.Section>
                <Image alt="List if shopping items" height={120} withPlaceholder src="/images/shopping-list.jpg" />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Lista {index + 1}:</Text>
                <Badge color="pink" variant="light">
                    Nowa
                </Badge>
            </Group>
            <ShoppingListTable />
        </Card>
    );
}
