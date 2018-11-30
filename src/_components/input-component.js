import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.nav`
  .form-error {
    font-size: 20px;
    color: red;
  }

  #err-icon {
    color: goldenrod;
    font-size: 18px;
    margin-right: 5px;
  }

`;
export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">
        <i class="fas fa-exclamation-triangle" id="err-icon"></i>
        {this.props.meta.error}
      </div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <div className="form-warning">
        <i class="fas fa-exclamation-triangle" id="err-icon"></i>
        {this.props.meta.warning}
      </div>;
    }

    return (
      <InputComponent>
        <div className="form-input">
          <label
            htmlFor={this.props.input.name}

          >
            -{this.props.label}-
            {error}
            {warning}
          </label>
          <input
            className="input-feedback"
            {...this.props.input}
            id={this.props.input.name}
            type={this.props.type}
            ref={input => (this.input = input)}
          />
        </div>
      </InputComponent>
    );
  }
}
