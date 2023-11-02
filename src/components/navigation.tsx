'use client';

import { Navbar, clsx } from '@mantine/core';
import { IconReceipt2, IconLogout, IconHome, IconToolsKitchen } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import '@mantine/core/styles/NavLink.css';
// import styles from './navigation.module.css';

const data = [
  { link: '/', label: 'Główna', icon: IconHome },
  { link: '/shopping-lists', label: 'Listy zakupów', icon: IconReceipt2 },
  { link: '/recipes', label: 'Przepisy', icon: IconToolsKitchen }
];

export function Navigation({ opened }: { opened: boolean }) {
  const pathname = usePathname();

  const links = data.map(item => {
    const isActive = pathname === item.link;

    return (
      <Link href={item.link} key={item.label}>
        <item.icon stroke={1.5} />
        <span>{item.label}</span>
      </Link>
    );
  });

  return (
    <Navbar p="md" width={{ base: '100%', md: 300 }} hiddenBreakpoint="sm" hidden={!opened}>
      <Navbar.Section grow>{links}</Navbar.Section>

      <Navbar.Section>
        <Link href="/">
          <IconLogout stroke={1.5} />
          <span>Logout</span>
        </Link>
      </Navbar.Section>
    </Navbar>
  );
}
