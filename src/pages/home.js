import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createError } from '../actions/error'
import { fetchPosts } from '../actions/post'

import Ad from "../components/ad/ad";
import Loader from "../components/loader/loader";
import CreatePost from "../components/post/create";
import Post from "../components/post/post";
import Welcome from "../components/welcome/welcome";

class Home extends React.Component {

  componentDidMount(){
    this.props.actions.fetchPosts();
  }

  componentDidCatch(error, info) {
    this.props.actions.createError(error, info);
  }


  render() {
    return (
      <div className="home">
        <Welcome />
        <div>
          <CreatePost />
          {this.props.posts && (
            <div className="posts">
              {this.props.posts.map((post) => (
                <>
                  {console.log('got my post', post)}
                  <Post
                    id={post.episode_id}
                    key={post.episode_id}
                    post={post}
                  />
                </>
              ))}
            </div>
          )}
          <button className="block">
            Load more posts
          </button>
        </div>
        <div>
          <Ad
            url="https://www.imdb.com/title/tt0076759/"
            imageUrl="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
          />
          <Ad
            url="https://www.imdb.com/title/tt0076759/"
            imageUrl="https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
          />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => {
  console.log(`checking form state `, state)
  const posts = Object.keys(state.posts).map(postId => state.posts[postId])
  return { posts }; 
};

export const mapDispatchToProps = dispatch => {
  return {
    actions:
      bindActionCreators({
        createError,
        fetchPosts,
      },
      dispatch
    ),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);

