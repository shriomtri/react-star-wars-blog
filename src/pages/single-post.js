import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Ad from "../components/ad/ad";
import Post from "../components/post/post";
import Loader from "../components/loader/loader";
import { getPost } from "../shared/http";

/**
 * Component for a single-post page
 * @module letters/components
 * @type {Object}
 */
export class SinglePost extends Component {


  constructor(props) {
    super(props);

    this.state = {
      error: null,
      post: {},
      endpoint: ``,
      loading: true,
    };

    this.getPost = this.getPost.bind(this);

    this.postId = window.location.href.split("/").pop();
  }

  componentDidMount() {
    console.log('my params ', this.postId)
    this.getPost(this.postId);
  }

  getPost(postId) {
    // const posts = await API.getPostsForPage();
    // console.log(posts);
    getPost(postId).then((res) => {
      res.json().then((post) => {
        console.log(post);
        this.setState(() => ({
          ...this.state,
          loading: false,
          post: post,
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
    return Object.keys(this.state.post).length > 0 ? (
      <div className="single-post">
        <Post post={this.state.post} />
        <Ad
          url="https://www.manning.com/books/react-in-action"
          imageUrl="/static/assets/ads/ria.png"
        />
      </div>
    ) : (
      <Loader />
    );
  }
}

SinglePost.propTypes = {
  postId: PropTypes.number,
};


export default SinglePost;