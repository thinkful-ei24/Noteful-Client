import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import Navigation from '../_components/navigation-component';

import { signUpUser } from '../_actions/users-action';
import { login } from '../_actions/auth-action';

import Input from '../_components/input-component';
import { required, nonEmpty, length, isTrimmed } from '../utils/validators';
const passwordLength = length({ min: 10, max: 72 });

export class SignUpForm extends React.Component {
  onSubmit(values) {
    const { username, password, name } = values;
    const user = { username, password, name };
    return this.props
      .dispatch(signUpUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    let nav;
    // if (props.loggedIn) {
    //   // nav = <DashNavigation />;
    // } else {
    nav = <Navigation />;
    // }
    return (
      <React.Fragment>
        {nav}
        <form
          className="login-form"
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
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

          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Sign up
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('signUp', Object.keys(errors)[0]))
})(SignUpForm);
