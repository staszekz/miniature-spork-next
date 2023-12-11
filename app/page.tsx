// 'use client';

import { Button, Center, Container } from '@mantine/core';
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient
    .prefetchQuery({
      queryKey: ['/api/list'],
      queryFn: aa => {
        console.log('prefetched', queryClient, aa);
        return axios.get('/api/list').then(res => res.data);
      }
    })
    .then(data => {
      console.log('prefetched data:', data);
    });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="box">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Center>
            <Button color="teal" component={Link} href="/shopping-lists">
              Zobacz swoje listy zakupów
            </Button>
          </Center>
        </HydrationBoundary>
      </Container>
    </>
  );
}
