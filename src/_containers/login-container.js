import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

require('./login-container.css');

export function LoginForm(props) {
  return (
    <form
      className="login-form"
      onSubmit={props.handleSubmit(values => {
        console.log(values);
      })}
      aria-label={'login form'}
    >
      <Field
        name="username"
        id="username"
        component={'Input'}
        element="input"
        type="text"
        label="Username"
        aria-label={'username field'}
      />
      <Field
        name="password"
        id="password"
        component={'Input'}
        element="input"
        type="password"
        label="Password"
        aria-label={'password field'}
      />

      <button className="loginBtn" aria-label={'login submit'}>
        Submit
      </button>
    </form>
  );
}

const mapStateToProps = state => ({});

export default reduxForm({})(connect(mapStateToProps)(LoginForm));
