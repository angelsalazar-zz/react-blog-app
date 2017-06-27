import React from 'react';
import {Field, reduxForm} from 'redux-form';


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


@reduxForm({
  form : 'PostsNewForm',
  validate
})
export default class PostsNew extends React.Component {
  renderField (field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          type="text"
          className="form-control"
          {...field.input}
          />
      </div>
    );
  }

  render () {
    return (
      <form>
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
      </form>
    );
  }
}
