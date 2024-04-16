import { Button, Center, Container } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';

import { getDatabase, getSinglePost } from './libs/notion';

const databaseId = process.env.NOTION_DATABASE_ID;

export default async function Home() {
  const res = await getDatabase(databaseId);
  // console.log(res[0].properties.Author.people[0].name);
  // console.log(res[0]);
  const { metadata, markdown } = await getSinglePost('nc-history');
  console.log('🚀 ~ post:', metadata, markdown);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="box">
        <Center>
          {/* <Button color="teal" component={Link} href="/shopping-lists">
            Zobacz swoje listy zakupów
          </Button> */}
          {markdown.parent}
        </Center>
      </Container>
    </>
  );
}
