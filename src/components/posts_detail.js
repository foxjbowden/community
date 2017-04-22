import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/actions_posts';
import { Link }  from 'react-router';

class PostDetail extends Component {
  componentWillMount(){
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    const { post } = this.props;

    if(!this.props.post){
      return <div>Loading...</div>
    }

    return(
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { post: state.posts.post };
}

export default connect(mapStateToProps, { fetchPost })(PostDetail);
