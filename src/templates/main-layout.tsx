'use client';

import { Burger, useMantineTheme, AppShell, Flex, Skeleton, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconReceipt2, IconLogout, IconHome, IconToolsKitchen, IconBasketFilled } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import '@mantine/core/styles.css';

const data = [
  { link: '/', label: 'Główna', icon: IconHome },
  { link: '/shopping-lists', label: 'Listy zakupów', icon: IconReceipt2 },
  { link: '/recipes', label: 'Przepisy', icon: IconToolsKitchen }
];
export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();
  const theme = useMantineTheme();
  const pathname = usePathname();

  const links = data.map(item => {
    const isActive = pathname === item.link;

    return (
      <NavLink
        component={Link}
        leftSection={<item.icon stroke={1.5} />}
        label={item.label}
        href={item.link}
        key={item.label}
        active={isActive}
      />
    );
  });

  return (
    <AppShell
      padding="md"
      header={{ height: { base: 50, md: 70 } }}
      navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}
    >
      <AppShell.Header p="md">
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Burger opened={opened} onClick={toggle} size="sm" color={theme.colors.gray[6]} mr="xl" />

          <Flex gap={10}>
            Miniature Spork Store <IconBasketFilled />
          </Flex>
        </div>
      </AppShell.Header>
      <AppShell.Navbar p="md" hidden={!opened}>
        {links}

        <NavLink component={Link} leftSection={<IconLogout stroke={1.5} />} label="Logout" href="/" />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
