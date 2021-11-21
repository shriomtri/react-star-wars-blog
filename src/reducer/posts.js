import initialState from "../constants/initialState";
import * as types from '../constants/types';

export const posts = (state = initialState.posts, action ) => {
  switch(action.type) {
      case types.posts.GET: {
        const { posts } = action;
        // Make a copy of the old state
        let nextState = Object.assign({}, state);
        // For each of our incoming posts, see if we have them in our map yet or not;
        // if they are missing, add them in. JS Maps can be read out in insertion order,
        // so we should still get posts in the order that we got them back from the API in
        for (let post of posts) {
            if (!nextState[post.id]) {
                nextState[post.id] = post;
            }
        }
        return nextState
      }
      default:
        return state;
  }
}