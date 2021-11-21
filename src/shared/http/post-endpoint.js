
import fetch from 'isomorphic-fetch';

// import { createError } from './error';

export function getPostsForPage(page = 'first') {
  console.log('reached here')
  const endpoint = `https://swapi.dev/api/films/?format=json`
  return fetch(endpoint);
}

export function getPost(postId) {
  console.log('getting single post')
  const endpoint = `https://swapi.dev/api/films/${postId}/?format=json`
  return fetch(endpoint);
}