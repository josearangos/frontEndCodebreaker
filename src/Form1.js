import React, { Component } from 'react'

export default class Form1 extends Component{
  render(){
    return ( 
        <form onSubmit={this.props.adivinar}>
            <input type="text" name="numero" placeholder="Ingrese numero para jugar" />
            <input type="submit" value = "Adivinar !"/>
        </form>
    );
  }
}