import styled from 'styled-components';
import grain from '../_images/grain.png';

const FormContainer = styled.nav`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  margin-bottom: 90%;
  padding: 30px;
  text-align: center;
  background-image: url(${grain});
  border: 1px solid #1b1b1e;
  border-radius: 16px;
  box-shadow: 3px 3px 0px 0px #1b1b1e;

  #username,
  #password,
  #name {
    display: inline-block;
    width: 295px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid black;
    border-radius: 6px;
    font-size: 18px;
    padding: 0 10px;
    background: #1b1b1e;
    color: #fff;
  }

  label {
    color: white;
    display: block;
    font-size: 22px;
    margin: 25px 0 6px 0;
  }

  #btn {
    margin: 20px 0;
    border: 2px solid #1b1b1e;
    border-radius: 28px;
    background: #f1bb01;
    color: #735a02;
    text-transform: uppercase;
    font-size: 0.75em;
    letter-spacing: 2px;
    font-weight: 600;
    cursor: pointer;
    padding: 13px 30px;
  }

  #login-btn:active {
    position: relative;
    top: 1px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-transition-delay: 9999s;
    -webkit-transition: color 9999s ease-out, background-color 9999s ease-out;
}
`;

export default FormContainer;
