import React, { Component } from "react";
import PropTypes from "prop-types";

import Content from "./content";
import Image from "./image";
import UserHeader from "./UserHeader";

import { API } from "../../shared/http";


export class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      post: props.post,
      comments: [],
      showComments: false,
      user: this.props.user,
    };
    console.log(`this is my post `, this.state)
    // this.loadPost = this.loadPost.bind(this);
  }

  componentDidMount() {
    // this.loadPost(this.props.id);
  }

  render() {
    if (!this.state.post) {
      return null;
    }
    return (
      <div className="post">
        <UserHeader {...this.state.post} />{" "}
        <Content {...this.state.post} />
        <Image {...this.state.post} />
        {/* <Link link={this.state.post.link} /> */}
        {/* <PostActionSection showComments={this.state.showComments} />{" "} */}
        {/* <Comments
          comments={this.state.comments}
          show={this.state.showComments}
          post={this.state.post}
          user={this.props.user}
        />{" "} */}
        {console.log('Trying to get the shit done')}
      </div>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
  director: PropTypes.string,
  opening_crawl: PropTypes.string,
  created: PropTypes.string,
};

export default Post;
