import * as types from '../constants/types'
import { getPostsForPage, getPost } from '../shared/http/post-endpoint';
import { createError } from "./error";

export const updateAvailablePosts = (posts) => {
  return {
    type: types.posts.GET,
    posts
  }
}

export const fetchPosts = () => {
  return dispatch => {
    getPostsForPage().then((res) => {
      res.json().then((posts) => {
        console.log(posts);
        dispatch(updateAvailablePosts(posts.results))
      });
    })
    .catch(err => dispatch(createError(err)));;
  }
}

export function loadPost(postId) {
  return dispatch => {
      return getPost(postId)
          .then(res => res.json())
          .then(post => {
              dispatch(updateAvailablePosts([post]));
          })
          .catch(err => dispatch(createError(err)));
  };
}

