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
      counter: 0,
    })
  }

  componentDidUpdate() {
    console.log("componente se actualizó")
  }

  // clickHandler() {
  //   let { counter } = this.state;
  //   this.setState({
  //     counter: counter + 1,
  //   })
  // }

  // clickHandlerRest() {
  //   let { counter } = this.state;
  //   this.setState({
  //     counter: counter - 1,
  //   })
  // }

  // PARA HACER LA OPERACION EN UN MISMO MÉTODO //

  clickHandler(operator) {
    let { counter } = this.state;
    if (operator === 'add') {
      counter++;
    } else {
      counter--;
    }
    this.setState({
      counter,
    });
  }

  // ETAPA DE MONTAJE
  render() {
    console.log('renderizado', this.state.counter);
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        {/* <button onClick={() => this.clickHandler()}>SUMA</button>
        <button onClick={() => this.clickHandlerRest()}>RESTA</button> */}
        <button onClick={() => this.clickHandler('add')}>SUMA</button>
        <button onClick={() => this.clickHandler()}>RESTA</button>
      </div>
    )
  }
 
}

export default Counter