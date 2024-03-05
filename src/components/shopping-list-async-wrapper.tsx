import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { headers } from 'next/headers';
// import { Suspense } from 'react';

import ShoppingList from '../../app/shopping-lists/shopping';

export async function getProducts(host: string = 'localhost:3000') {
  try {
    const res = await axios.get(`http://${host}/api/list`);
    return res.data;
  } catch (err) {
    const axiosError = err as AxiosError;
    throw new Error(axiosError.message);
  }
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ['get-products-prefetched'],
//     queryFn: ()=> getProducts()
//   });

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient)
//     }
//   };
// }

export async function AsyncShoppingListWrapper() {
  const host = headers().get('host');
  // noStore();
  const queryClient = new QueryClient();
  // const fetchedData = await getProducts(host!);
  await queryClient.prefetchQuery({
    queryKey: ['lista-zakupow'],
    queryFn: () => getProducts(host!),
    staleTime: 300000
  });
  // if (!fetchedData) {
  //   console.log('Data has not been fetched yet');
  //   return null; // or some loading state
  // }
  // console.log('🚀 ~ fetchedData zakupow:', fetchedData);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <ShoppingList />
      {/* </Suspense> */}
    </HydrationBoundary>
  );
}
