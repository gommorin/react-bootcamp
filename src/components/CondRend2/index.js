import React, { Component } from 'react'

// CSS //
import './CondRend2.css'

// UN COMPONENTE EMPIEZA POR DEFINIR SU CLASE //
// El componente es la clase hijo donde los PROPS son parte de los atributos del padre //

class CondRend2 extends Component {
  // construimos el componente
  constructor(props) {
    super(props);
    this.state = {
      isActive: false, // ---------> este es el estado inicial de la propiedad del estado en la clase
    }
  }

  // esta es la función que se va a llamar para renderizar el cambio de estado al dar click en el botón en render
  handleClick = () => {
    this.setState({ // ----------> con esto estoy usando el método para que cambie el estado de falso a verdadero
      // isActive: true, // --------> con esto va a cambiar a de false a true pero no va a regresar a su estado inicial
      isActive: !this.state.isActive // ----> con esto le decimos al estado que se actualice al estado opuesto del que está actualmente
    })
  }

  render() {
    // deconstruyo la variable de state para utilizar su propiedad en mis funciones
    const { isActive} = this.state

    // debe regresar algo cuando se renderiza
    return (
    <div> { isActive
      ? <ul>Lista de amigos
          <li>Luis</li>
          <li>Fernando</li>
          <li>Alejandro</li>
        </ul>
      : <ul>Lista de enemigos
          <li>Alfredo</li>
          <li>Brent</li>
          <li>Putito</li>
        </ul> }
      {/* para que haya un cambio en la condición se debe registrar un evento. El usuario puede hacerlo
      Esto se logra en este caso agregando el evento que "al dar click" onClick, debe cambiar de estado*/}
      <button onClick={this.handleClick}>
        { isActive ? 'Desactivar' : 'Activar'}
      </button>
      {/* Adentro de los {} del onClick, va una función la cual se declara antes de hacer el render*/}
    </div>
    )
  }
}

export default CondRend2