import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { headers } from 'next/headers';
import { Suspense } from 'react';

import ShoppingList from '../../app/shopping-lists/shopping';

async function getProducts(host: string) {
  try {
    const res = await axios.get(`http://${host}/api/list`);
    return res.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    throw new Error(axiosError.message);
  }
}

export async function AsyncShoppingListWrapper() {
  const host = headers().get('host');

  const queryClient = new QueryClient();
  const fetchedData = await getProducts(host!);
  // const fetchedData = await queryClient.prefetchQuery({
  //   queryKey: ['lista-zakupow'],
  //   queryFn: () => getProducts(host!)
  // });
  // if (!fetchedData) {
  //   console.log('Data has not been fetched yet');
  //   return null; // or some loading state
  // }
  console.log('🚀 ~ fetchedData zakupow:', fetchedData);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShoppingList data={fetchedData} />
    </Suspense>
  );
}
