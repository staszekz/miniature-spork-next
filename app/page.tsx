import { Button, Center, Container } from '@mantine/core';
import { createClient } from '@sanity/client';
import Head from 'next/head';
import Link from 'next/link';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // you can find this in sanity.json
  useCdn: true // `false` if you want to ensure fresh data
});
const query = `*[_type == "post"]{
  title,
  "categories": categories[]->title,
  "author": author->{slug, name},
  "bodyText": body[]{
    "paragraph": children[0].text
  }
}`;

export default async function Home() {
  const data = await client.fetch(query);
  console.log(data[0].bodyText);

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

          {/* <Container>{title}</Container> */}
          {/* <Container>{slug}</Container> */}
          {/* <Container>{title}</Container> */}
        </Center>
      </Container>
    </>
  );
}
