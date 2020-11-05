import React, { Component } from 'react'

// CSS //
import './Form.css'


// FORMULARIO PARA CAMBIO DE DIVISAS ENTRE PESOS Y DOLARES //
class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      MXN: '',
      USD: '',
    }

    this.handleChange = this.handleChange.bind(this) // ---------> QUÉ ES ESTO???
  }

  handleChange({target: {value}}) {
    this.setState({
      MXN: value,
      USD: value / 21.6
    })
  }


  render() {
    const {MXN, USD} = this.state
    return <div>
      <form>
        <input type='number' value={MXN} placeholder="MXN $" onChange={this.handleChange} />
      </form>
      <p>USD: ${USD}</p>
    </div>
  }
}

export default Form