'use client';

import { Card, Group, Image, Text, Badge, Button } from '@mantine/core';

import { CardProps } from '@types';

import { ShoppingListTable } from './shopping-list-table';

export const ShoppingListCard = ({ index, list, handleDeleteList }: CardProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder bg="teal.2" w={350}>
      <Card.Section>
        <Image alt="List if shopping items" height={120} src="/images/shopping-list.jpg" />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Lista {index + 1}:</Text>
        <Badge color="pink" variant="light">
          Nowa
        </Badge>
        <Button color="teal" variant="outline" size="sm" radius="md" onClick={handleDeleteList}>
          Usuń
        </Button>
      </Group>
      <ShoppingListTable />
    </Card>
  );
};
