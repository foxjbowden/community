import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/actions_posts';
import { Link } from 'react-router';

class PostsNew extends Component {
  //look for new ways to do this url change on submit
  //only use context when using routers
  static contextTypes = {
    router: PropTypes.object
  };

  onSUbmit(props){
    this.props.createPost(props)
    .then(() => {
      //post success - navigate
      this.context.router.push('/posts');
    });
  }

  render() {
    const { fields: { title, content }, handleSubmit } = this.props;

    //const { handleSubmit } = this.props;
    //const handleSubmit = this.props.handleSubmit;

    //destructures object - {...title}
    return(
      <form onSubmit={handleSubmit(this.onSUbmit.bind(this))}>
        <h3>Create a New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" {...content}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/posts" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = "Enter a title - required.";
  }

  return errors;
}

// arguments: form config, mapStateToProps, mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'content'],
  validate
}, null, { createPost })(PostsNew);
