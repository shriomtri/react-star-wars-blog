
import * as API from './http';
// import { createError } from './error';

export function getPostsForPage(page = 'first') {
  console.log('reached here')
  const endpoint = `https://swapi.dev/api/films/?format=json`
  return API.fetchPosts(endpoint);
}