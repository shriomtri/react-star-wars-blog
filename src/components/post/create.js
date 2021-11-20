import PropTypes from 'prop-types';
import React from 'react';

import Filter from 'bad-words'

const filter = new Filter()
class CreatePost extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      content: '',
      valid: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e){
    const content = filter.clean(e.target.value);

    this.setState({content, valid: content.length < 280})
  }

  handleOnSubmit() {
      if(!this.state.valid) {
        return;
      }

      const newPost = {
        content: this.state.content,
      }

      console.log(newPost);
  }

  render() {
    return(
      <div className="create-post">
        <button onClick={this.handleOnSubmit}>Post</button>
        <textarea
          value={this.state.content}
          onChange={this.handleOnChange}
          placeholder="What's on your mind ?"
        />
      </div>
    )
  }

}

export default CreatePost;