import React, { Component } from 'react'


// CONDITIONAL RENDERING BASADO EN PROPS //
// class ConditionalRendering extends Component {
//   constructor(props) {
//     super(props)
//     // isActive = boolean
//   }

//   render() {

//     const { isActive } = this.props

//     return <div>
//       {
//         (isActive? <h1>Activo</h1> : <h1>Inactivo</h1>)
//       }
//     </div>
//     // --------> En esta condición, me va a mostrar Inactivo porque no estamos pasando
//     // --------> ningún valor al App.js en la línea <ConditionalRendering />
//   }
// }

// export default ConditionalRendering


// ------------------------------------------------------------------------------------------ //


// CONDITIONAL RENDERING BASADO EN STATE //

class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActiveState: false,
    }
  }

  render() {
    const { props: {isActive}, state: {isActiveState} } = this

    return <div>
      { isActive ? <p>Prop Activo</p> : <p>Prop Inactivo</p> }
      { isActiveState ? <p>State Activo</p> : <p>State Inactivo</p>}
    </div>
    // --------> En esta condición, me va a mostrar Inactivo porque no estamos pasando
    // --------> ningún valor al App.js en la línea <ConditionalRendering />
  }
}

export default ConditionalRendering