import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

const getPageMetaData = post => {
  const getTags = tags => {
    const allTags = tags.map(tag => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    tags: getTags(post.properties.Tags.multi_select),
    slug: post.properties.slug.rich_text[0].plain_text,
    ...post
    // description: post.properties.Description.rich_text[0].plain_text,
    // date: getToday(post.properties.Date.last_edited_time),
    // slug: post.properties.Slug.rich_text[0].plain_text,
  };
};

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId
  });
  return response.results.map(post => {
    return getPageMetaData(post);
  });
};

const n2m = new NotionToMarkdown({ notionClient: notion });

export const getSinglePost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID as string,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug
        }
      }
    }
  });
  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  console.log('🚀 ~ mdblocks:', mdblocks);

  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString
  };
};
