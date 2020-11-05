import React, { Component } from 'react'

// CSS //
import './FormClick.css'

// FORMULARIO PARA CAMBIO DE DIVISAS ENTRE PESOS Y DOLARES //
class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
      MXN: '',
      USD: ''
    }

    this.handleChange = this.handleChange.bind(this) // ---------> QUÉ ES ESTO???
  }

  handleChange() {
    this.setState({
      USD: value / 21.6
    })
  }

  render() {
    const {MXN, USD} = this.state
    return <div>
      <form>
        <input type='number' placeholder="MXN $"/>        <button>Cambiar a USD</button>
      </form>
      <p>USD: ${USD}</p>
    </div>
  }
}

export default Form
