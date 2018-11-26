import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

require('./login-container.css');

export function LoginForm(props) {
  return (
    <div id='login-section'>
      <form className='login-form' onSubmit={props.handleSubmit(values => {
        console.log(values);
      }
      )} aria-label={'login form'}>
        <label for='username'>Username</label>
        <Field name='username' id='username' component={'Input'} element='input' type='text'
          aria-label={'username field'} />
        <label for='username'>Password</label>
        <Field name='password' id='password' component={'Input'} element='input' type='password'
          aria-label={'password field'}/>

        <button className='loginBtn' aria-label={'login submit'}>Submit</button>
      </form>
    </div>

  )
}

const mapStateToProps = state => ({

})

export default reduxForm({

})(connect(mapStateToProps)(LoginForm));