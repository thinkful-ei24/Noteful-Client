import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../_components/input-component';
import Navigation from '../_components/navigation-component';
import { login } from '../_actions/auth-action';

require('./login-container.css');

export function LoginForm(props) {
  let nav;
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  } else {
    nav = <Navigation />;
  }

  return (
    <React.Fragment>
      {nav}
      <form
        className="login-form"
        onSubmit={props.handleSubmit(values => props.dispatch(login(values)))}
        aria-label={'login form'}
      >
        <Field
          name="username"
          id="username"
          component={Input}
          type="text"
          label="Username"
          aria-label={'username field'}
        />
        <Field
          name="password"
          id="password"
          component={Input}
          type="password"
          label="Password"
          aria-label={'password field'}
        />

        <button className="loginBtn" aria-label={'login submit'}>
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => 
    dispatch(focus('login', 'username'))
})(connect(mapStateToProps)(LoginForm));
