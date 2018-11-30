import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../_components/input-component';
import Navigation from '../_components/navigation-component';
import { login } from '../_actions/auth-action';


//-------------------------------------------------
// STYLES
// ------------------------------------------------

const LoginContainer = styled.nav`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  margin-bottom: 90%;
  padding: 30px;
  text-align: center;
  background-color: beige;
  border: 1px solid black;
  border-radius: 5px;
  -moz-box-shadow: 3px 3px 20px 0px #3e7327;
  -webkit-box-shadow: 3px 3px 20px 0px #3e7327;
  box-shadow: 3px 3px 20px 0px #3e7327;


  #username, #password, #name {
    display: inline-block;
    width: 250px;
    height: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 18px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 30px white inset;
  }

  label {
    display: block;
    font-size: 26px;
  }

  #login-btn {
    margin-top: 20px;
    -moz-box-shadow: 0px 10px 14px -7px #3e7327;
    -webkit-box-shadow: 0px 10px 14px -7px #3e7327;
    box-shadow: 0px 10px 14px -7px #3e7327;
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #77b55a), color-stop(1, #72b352));
    background:-moz-linear-gradient(top, #77b55a 5%, #72b352 100%);
    background:-webkit-linear-gradient(top, #77b55a 5%, #72b352 100%);
    background:-o-linear-gradient(top, #77b55a 5%, #72b352 100%);
    background:-ms-linear-gradient(top, #77b55a 5%, #72b352 100%);
    background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#77b55a', endColorstr='#72b352',GradientType=0);
    background-color:#77b55a;
    -moz-border-radius:10px;
    -webkit-border-radius:10px;
    border-radius:10px;
    border:1px solid #4b8f29;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:16px;
    font-weight:bold;
    padding:10px 30px;
    text-decoration:none;
    text-shadow:0px 1px 0px #5b8a3c;
  }

  #login-btn:hover {
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #72b352), color-stop(1, #77b55a));
    background:-moz-linear-gradient(top, #72b352 5%, #77b55a 100%);
    background:-webkit-linear-gradient(top, #72b352 5%, #77b55a 100%);
    background:-o-linear-gradient(top, #72b352 5%, #77b55a 100%);
    background:-ms-linear-gradient(top, #72b352 5%, #77b55a 100%);
    background:linear-gradient(to bottom, #72b352 5%, #77b55a 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#72b352', endColorstr='#77b55a',GradientType=0);
    background-color:#72b352;
  }

  #login-btn:active {
    position:relative;
    top:1px;
  }
`;

//-------------------------------------------------
// COMPONENT
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
      <LoginContainer>
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

          <button id="login-btn" aria-label={'login submit'}>
            Log in
          </button>
        </form>
      </LoginContainer>
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
