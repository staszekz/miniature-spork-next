// 'use client';
import { Button, Center, Container } from '@mantine/core';
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import axios, { Axios, AxiosError } from 'axios';
import Head from 'next/head';
import { headers } from 'next/headers';
import Link from 'next/link';

// async function getProducts(host: string) {
//   try {
//     const res = await axios.get(`http://${host}/api/list`);
//     return res;
//   } catch (err) {
//     const axiosError = err as AxiosError;
//     throw new Error(axiosError.message);
//   }
// }

export default async function Home() {
  // const host = headers().get('host');
  // const queryClient = new QueryClient();

  // const fetchedData= await queryClient.prefetchQuery({
  //   queryKey: ['lista-zakupow'],
  //   queryFn: () => getProducts(host!),
  //   staleTime: 300000
  // });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="box">
        <Center>
          <Button color="teal" component={Link} href="/shopping-lists">
            Zobacz swoje listy zakupów
          </Button>
        </Center>
      </Container>
    </>
  );
}
