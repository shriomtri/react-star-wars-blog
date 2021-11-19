import React from "react";
import Ad from "./components/ad/Ad";
import Loader from "./components/loader/loader";

import Navigation from "./components/nav/navbar";
import Welcome from "./components/welcome/Welcome";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      posts: [],
      endpoint: ``,
    };
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
