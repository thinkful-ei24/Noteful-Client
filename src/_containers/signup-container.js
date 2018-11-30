import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import styled from 'styled-components';
import Navigation from '../_components/navigation-component';

import { signUpUser } from '../_actions/users-action';
import { login } from '../_actions/auth-action';

import Input from '../_components/input-component';
import { required, nonEmpty, length, isTrimmed } from '../utils/validators';

//-------------------------------------------------
// STYLES
// ------------------------------------------------

import FormContainer from './form-styles';

//-------------------------------------------------
// CONTAINER
// ------------------------------------------------

const passwordLength = length({ min: 10, max: 72 });

export function SignUpForm(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
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
      <Navigation />
      <FormContainer>
        <form
          className="login-form"
          onSubmit={props.handleSubmit(values => {
            const { username, password, name } = values;
            const user = { username, password, name };
            return props
              .dispatch(signUpUser(user))
              .then(() => props.dispatch(login(values)));
          })}
        >
          {error}
          <Field component={Input} type="text" name="name" label="Name" />
          <Field
            component={Input}
            type="text"
            name="username"
            label="Username"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <Field
            component={Input}
            type="password"
            name="password"
            label="Password"
            validate={[required, passwordLength, isTrimmed]}
          />

          <button
            type="submit"
            id="btn"
            disabled={props.pristine || props.submitting}
          >
            Sign up
          </button>
        </form>
      </FormContainer>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.user !== null
});

export default reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signUp', Object.keys(errors)[0]))
})(connect(mapStateToProps)(SignUpForm));
