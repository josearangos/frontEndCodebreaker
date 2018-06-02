import React, { Component } from 'react';
import request from "../node_modules/superagent/superagent";
import Form1 from './Form1';
import Form2 from './Form2';

class CodeBreaker extends Component {

  constructor(){
    super();
    this.state = {respuesta: ""};
  }
  
  adivinar(num, callback){
    const uri = "http://localhost:5000/api/codebreaker/try";
    request.post(uri)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ number: num })
      .end(function(err, res){
        let response = JSON.parse(res.text);
        callback(response.err, response.message);
    });  
  }

  clave(num, callback){
    const uri = "http://localhost:5000/api/codebreaker/secret";
    request.post(uri)
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ number: num })
      .end(function(err, res){
        let response = JSON.parse(res.text);
        callback(response.err, response.message);
    });  

  }


  handleAdivinar(event) {
    event.preventDefault();
    let numero = event.target.numero.value; 
    var afuera = this;
    this.adivinar(numero, function(err, data){
      afuera.setState({respuesta: data});
    });  
  }

  handleClave(event) {
    event.preventDefault();
    let numero = event.target.clave.value;
    var afuera = this;
    this.clave(numero, function(err, data){
      afuera.setState({respuesta: data});
    });   
  }

  render() {
    return (
      <div className="CodeBreaker">
        <h2>Cristian Andres Marin - Jose Arango</h2>
        <div>
          <Form2 clave={this.handleClave.bind(this)} />
          <Form1 adivinar={this.handleAdivinar.bind(this)} />
        </div>
        <span>Respuesta: {this.state.respuesta}</span>     
      </div>   
    );
  }
}

export default CodeBreaker;