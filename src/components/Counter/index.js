import React, { Component } from 'react'

class Counter extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    };
    console.log('se arma el constructor de propiedades');
  }
  
  // ETAPA DE COMMIT ----> AUNQUE ES ETAPA COMMIT, SE PONE ANTES DE MONTAJE PORQUE SIGUE ESA SECUENCIA
  componentDidMount() {
    console.log('componente montado')
    this.setState({
      counter: 1,
    })
  }

  componentDidUpdate() {
    console.log("componente se actualizó")
  }

  clickHandler() {
    let { counter } = this.state;
    this.setState({
      counter: counter + 1,
    })
  }

  clickHandlerRest() {
    let { counter } = this.state;
    this.setState({
      counter: counter - 1,
    })
  }

  // ETAPA DE MONTAJE
  render() {
    console.log('renderizado', this.state.counter);
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={() => this.clickHandler()}>ADD</button>
        <button onClick={() => this.clickHandler()}>REST</button>
      </div>
    )
  }
 
}

export default Counter