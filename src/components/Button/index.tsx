import React, { Component } from 'react';
import './Button.css'

type ButtonProps = {
    message: string,
    class: string
}

class Button extends Component <ButtonProps>{
  
    render() {
      return (
        <button className={this.props.class}>{this.props.message}</button>
      );
    }
  }

export default Button;