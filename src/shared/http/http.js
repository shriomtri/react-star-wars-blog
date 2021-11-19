import fetch from 'isomorphic-fetch';

/**
 * Fetch posts from the API
 * @method fetchPosts
 * @param  {string}   endpoint URL provided by Redux; the API will yield further endpoints we can access via the Link Header (https://www.w3.org/wiki/LinkHeader)
 * @return {Response}          Fetch API Response
 */
 export function fetchPosts(endpoint) {
  return fetch(endpoint);
}
