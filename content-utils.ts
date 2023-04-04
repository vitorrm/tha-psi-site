import { Page } from './shims/contentTypes';

const PAGES_PATH = 'pages'

function generateSlug(path: string | undefined): string | undefined {
  return path?.replace('/' + PAGES_PATH + '/', '')
}

export async function getPage({pageSlug}: {pageSlug: string}): Promise<Page> {
  const content = await queryContent<Page>(`${PAGES_PATH}/${pageSlug}`).findOne();
  content.slug = generateSlug(content._path)
  return content
}

export async function getAllPages(): Promise<Page[]> {
  const contentList = await queryContent<Page>(`${PAGES_PATH}`).find();
  contentList.forEach(content => {
    content.slug = generateSlug(content._path)
  });
  return contentList
}

export function createExcerpt({
  text,
  length = 150,
}: {
  text: string
  length?: number
}): string {
  return text.split('', length).concat(['...']).join('')
}
