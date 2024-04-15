import { Button, Center, Container } from '@mantine/core';
import Head from 'next/head';
import Link from 'next/link';

import { getDatabase } from './libs/notion';

const query = `*[_type == "post"]{
  title,
  "categories": categories[]->title,
  "author": author->{slug, name},
  "bodyText": body[]{
    "paragraph": children[0].text
  }
}`;
const databaseId = process.env.NOTION_DATABASE_ID;

export default async function Home() {
  const res = await getDatabase(databaseId);
  console.log(res);
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
