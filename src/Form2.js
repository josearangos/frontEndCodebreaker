import React, { Component } from 'react'

export default class Form2 extends Component{
  render(){
    return ( 
        <form onSubmit={this.props.clave}>
            <input type="text" name="clave" placeholder="Ingrese clave" />
                        <input type="submit" value = "Cambiar clave"/>
        </form>
    );
  }
}