import React from "react";
import { Link } from "react-router-dom";

import Ad from "../components/ad/ad";
import Loader from "../components/loader/loader";
import CreatePost from "../components/post/create";
import Post from "../components/post/post";
import Welcome from "../components/welcome/welcome";
import { API } from "../shared/http";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      posts: [],
      endpoint: ``,
      loading: true,
    };

    this.getPosts = this.getPosts.bind(this);
    console.log("I home reached");
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    // const posts = await API.getPostsForPage();
    // console.log(posts);
    API.getPostsForPage().then((res) => {
      res.json().then((posts) => {
        console.log(posts);
        this.setState(() => ({
          ...this.state,
          loading: false,
          posts: posts.results,
        }));
      });
    });
  }

  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
    this.setState({
      error: err,
    });
  }

  render() {
    return this.state.loading ? (
      <div className="loading">
        <Loader />
      </div>
    ) : (
      <div className="home">
        <Welcome />
        <div>
          <CreatePost />
          {this.state.posts.length && (
            <div className="posts">
              {this.state.posts.map((post) => (
                <>
                  {console.log(post)}
                    <Post
                      id={post.episode_id}
                      key={post.episode_id}
                      post={post}
                    />
                </>
              ))}
            </div>
          )}
          <button className="block">Load more posts</button>
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

export default Home;