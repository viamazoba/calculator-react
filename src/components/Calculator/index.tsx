import React, { Component } from 'react';
import Button from '../Button';

type CalculatorProps = {
    message: string
}

class Calculator extends Component <CalculatorProps>{
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     mensaje: '¡Hola desde mi componente!'
    //   };
    // }

    // state: CalculatorProps = {
    //     message: 'Hola mundo',
    // };
  
    render() {
      return (
        <div>
          <p>{this.props.message}</p>
          <Button class = 'generic-button' message = '8'/>
          <Button class='reset' message = 'RESET'></Button>
          <Button class='del' message = 'DEL'></Button>
          <Button class='equal' message = '='></Button>
          <Button class='generic-button' message = '+'></Button>
        </div>
      );
    }
  }

export default Calculator;