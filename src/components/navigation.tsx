'use client';

import { createStyles, Navbar, getStylesRef, rem } from '@mantine/core';
import { IconReceipt2, IconLogout, IconHome, IconToolsKitchen } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const useStyles = createStyles((theme) => ({
    header: {
        borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`
    },

    footer: {
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]}`
    },

    link: {
        ...theme.fn.focusStyles(),
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        fontSize: theme.fontSizes.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,

            [`& .${getStylesRef('icon')}`]: {
                color: theme.colorScheme === 'dark' ? theme.white : theme.black
            }
        }
    },

    linkIcon: {
        ref: getStylesRef('icon'),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        marginRight: theme.spacing.sm
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
            color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
            [`& .${getStylesRef('icon')}`]: {
                color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
            }
        }
    }
}));

const data = [
    { link: '/', label: 'Główna', icon: IconHome },
    { link: '/shopping-lists', label: 'Listy zakupów', icon: IconReceipt2 },
    { link: '/recipes', label: 'Przepisy', icon: IconToolsKitchen }
];

export function Navigation({ opened }: { opened: boolean }) {
    const { classes, cx } = useStyles();
    const pathname = usePathname();

    const links = data.map((item) => {
        const isActive = pathname === item.link;

        return (
            <Link className={cx(classes.link, { [classes.linkActive]: isActive })} href={item.link} key={item.label}>
                <item.icon className={classes.linkIcon} stroke={1.5} />
                <span>{item.label}</span>
            </Link>
        );
    });

    return (
        <Navbar p="md" width={{ base: '100%', md: 300 }} hiddenBreakpoint="sm" hidden={!opened}>
            <Navbar.Section grow>{links}</Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <Link href="/" className={classes.link}>
                    <IconLogout className={classes.linkIcon} stroke={1.5} />
                    <span>Logout</span>
                </Link>
            </Navbar.Section>
        </Navbar>
    );
}
