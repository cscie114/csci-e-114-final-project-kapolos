import EleventyFetch from '@11ty/eleventy-fetch'

import type * as Poetry from 'Poetry'

const headers = {
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
}
const eleventyReqOptions = {
  type: 'json',
  duration: '2w',
  fetchOptions: { headers },
  directory: '.fetch-cache'
}

/**
 *  Recursively poems by author
 */
export const getPoems = async (author: string): Promise<Poetry.IPoem[]> => {
  const endpoint = 'https://poetrydb.org/author'

  try {
    console.log(`Retrieving ${endpoint}/${author}`)
    const resp = await EleventyFetch(`${endpoint}/${author}`, eleventyReqOptions)
    console.log('...done!')

    return resp
  } catch (error) {
    console.error(error)

    return []
  }
}
