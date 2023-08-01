'use client';

import { Burger, MediaQuery, useMantineTheme, AppShell, Header } from '@mantine/core';
import { useState } from 'react';

import { Navigation } from '@components';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (
        <AppShell
            padding="md"
            header={
                <Header height={{ base: 50, md: 70 }} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <div>Application header</div>
                    </div>
                </Header>
            }
            styles={() => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
            })}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={<Navigation opened={opened} />}
        >
            {children}
        </AppShell>
    );
};
