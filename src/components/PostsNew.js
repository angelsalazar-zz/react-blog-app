import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title';
  }

  if (!values.categories) {
    errors.categories = 'Enter a category';
  }

  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

@connect(null, {createPost})
@reduxForm({
  form : 'PostsNewForm',
  validate
})
export default class PostsNew extends React.Component {
  renderField (field) {
    const hasDanger = field.meta.touched && field.meta.error ? 'has-danger' : '';
    return (
      <div className={`form-group ${hasDanger}`}>
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
          />
        <div className="text-help">
          {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    );
  }

  onSubmit (values) {
    this.props.createPost(values);
  }

  render () {
    console.log(this.props);
    const {handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title"
          component={this.renderField}
          />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
          />
        <Field
          name="content"
          label="Content"
          component={this.renderField}
          />
        <button className="btn btn-primary" type="submit">Submit</button>
        <Link to="/" className="btn btn-default">Cancel</Link>
      </form>
    );
  }
}

// export default reduxForm({
//   form : 'PostsNewForm',
//   validate
// })(connect(null, {createPost})(PostsNew))
