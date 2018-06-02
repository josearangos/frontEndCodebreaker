import React, { Component } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';

class CodeBreaker extends Component {

  constructor(){
    super();
    this.state = {respuesta: ""};
  }
  
  adivinar(num){
    const uri = "http://localhost:5000/api/codebreaker/try";
    fetch(uri, {
    method: 'post',
    body: JSON.stringify(`{ "number": "${num}"}`)
    }).then(response => {
      console.log(response);
      this.setState({respuesta: JSON.stringify(response)});
    })
  }

  clave(num){
    const uri = "http://localhost:5000/api/codebreaker/secret";
    fetch(uri, {
    method: 'post',
    body: JSON.stringify(`{ "number": "${num}"}`)
    }).then(response => {   
      this.setState({respuesta: JSON.stringify(response)});  
    })
  }


  handleAdivinar(event) {
    event.preventDefault();
    let numero = event.target.numero.value; 
    this.adivinar(numero);  
  }

  handleClave(event) {
    event.preventDefault();
    let numero = event.target.clave.value; 
    this.clave(numero);   
  }

  render() {
    return (
      <div className="CodeBreaker">
        <h2>Cristian Andres Marin - Jose Arango</h2>
        <div>
          <Form1 adivinar={this.handleAdivinar.bind(this)} />
          <Form2 clave={this.handleClave.bind(this)} />
        </div>
        <span>Respuesta: {this.state.respuesta}</span>     
      </div>   
    );
  }
}

export default CodeBreaker;