import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import Navigation from '../_components/navigation-component';

require('./login-container.css');

export function LoginForm(props) {
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
    </React.Fragment>
  );
}

const mapStateToProps = state => ({});

export default reduxForm({})(connect(mapStateToProps)(LoginForm));
