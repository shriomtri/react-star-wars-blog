import React from "react";
import Ad from "./components/ad/Ad";
import Loader from "./components/loader/loader";

import Navigation from "./components/nav/navbar";
import Post from "./components/post/post";
import Welcome from "./components/welcome/Welcome";
import { API } from "./shared/http";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      posts: [],
      endpoint: ``,
    };

  this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
      this.getPosts();
  }

  getPosts() {
      // const posts = await API.getPostsForPage();
      // console.log(posts);
      API.getPostsForPage().then(
        res => {
          res.json().then(posts => {
            console.log(posts)
            this.setState(() => ({
              ...this.state,
              loading: false,
              posts: posts.results,
            }))
          })
        }
      )
  }

  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
    this.setState({
      error: err
    })
  }


  render() {
    return (
      <div className="app">
        <Navigation />
        {this.state.loading ? (
          <div className="loading">
            <Loader />
          </div>
        ) : (
          <div className="home">
            <Welcome />
            <div>
              {
                this.state.posts.length && (
                  <div className="posts">
                    {this.state.posts.map((post) => (
                      <>
                      {console.log(post)}
                      <Post id={post.episode_id} key={post.episode_id} post={post} />
                      </>
                    ))}
                  </div>
                )
              }
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
        )}
      </div>
    );
  }
}

export default App;
