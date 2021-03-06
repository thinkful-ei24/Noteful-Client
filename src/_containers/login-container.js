import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Input from '../_components/input-component';
import Navigation from '../_components/navigation-component';
import { login, demoUser } from '../_actions/auth-action';


//-------------------------------------------------
// STYLES
// ------------------------------------------------

import FormContainer from './form-styles';

//-------------------------------------------------
// CONTAINER
// ------------------------------------------------

export function LoginForm(props) {
  let nav;
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  } else {
    nav = <Navigation />;
  }

  let error;
  if (props.error) {
    error = (
      <div className="form-error" aria-live="polite">
        {props.error}
      </div>
    );
  }
  return (
    <React.Fragment>
      {nav}
      <FormContainer>
        <form
          className="login-form"
          onSubmit={props.handleSubmit(values => props.dispatch(login(values)))}
          aria-label={'login form'}
        >
          {error}
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

          <button id="btn" aria-label={'login submit'}>
            Log in
          </button>
        </form>
        <a onClick={() => props.dispatch(demoUser())} className="demo-link" href="#">Login with demo account</a>
      </FormContainer>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('login', 'username'));
  }
})(connect(mapStateToProps)(LoginForm));
