'use client';
import Head from 'next/head';
import { Box, Button, Center, Container } from '@mantine/core';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container className="box">
                <Center mih={'100vh'} mx="auto">
                    <Button color="teal" component={Link} href="/shopping-lists">
                        Zobacz swoje listy zakupów
                    </Button>
                </Center>
            </Container>
        </>
    );
}
