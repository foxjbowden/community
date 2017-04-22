import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/actions_posts';
import { Link }  from 'react-router';

class PostsIndex extends Component {
  //lifecycle method - called when the Component is rendered for the first time
  // fetch data
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
        <Link to={"/posts/" + post.id}>
          {post.title}
        </Link>
        </li>
      );
    });
  }

  render() {
    return(
      <div>
        <div className="txt-xs-right">
          <Link to="posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Recent Activity:</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //props inside UserList
  return { posts: state.posts.all };
}

//drop mapDispatcToProps function and put it in connect() w/ ES6
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
