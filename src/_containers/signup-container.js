import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Navigation from '../_components/navigation-component';

import { signUpUser } from '../_actions/users-action';
import { login } from '../_actions/auth-action';

import Input from '../_components/input-component';
import { required, nonEmpty, length, isTrimmed } from '../utils/validators';
const passwordLength = length({ min: 10, max: 72 });

export function SignUpForm(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <React.Fragment>
      <Navigation />
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
        <label htmlFor="name">Name</label>
        <Field component={Input} type="text" name="name" />
        <label htmlFor="username">Username</label>
        <Field
          component={Input}
          type="text"
          name="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
        />

        <button type="submit" disabled={props.pristine || props.submitting}>
          Sign up
        </button>
      </form>
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
