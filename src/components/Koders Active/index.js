import React, { Component } from 'react';

// CSS //
import './KodersActive.css'

// const KODERS_JSON = [
//   {
//     name: 'Axel', // --------> dato tipo string
//     age: 31, // --------> dato tipo número
//     hobbies: ['play', 'drink', 'surf', 'walk pets', 'netflix'] // --------> dato tipo array de strings
//   },
//   {
//     name: 'Ivan',
//     age: 29,
//     hobbies: ['basket','chess','videogames']
//   },
//   {
//     name: 'Luis',
//     age: 34,
//     hobbies: ['money', 'pets', 'social media', 'esports']
//   }
// ]


class KodersActive extends Component {
  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
  }

  handleClick() {
    let { isActive } = this.state
    this.setState({
      isActive: !isActive
    })
  }

  render() {
    const { isActive } = this.state
    return(
      <div>
        <ul>
          <li onClick={() => this.handleClick()} className={isActive ? 'active' : null}>Channel 1</li>
          <li onClick={() => this.handleClick()} className={isActive ? 'active' : null}>Channel 2</li>
          <li onClick={() => this.handleClick()} className={isActive ? 'active' : null}>Channel 3</li>
        </ul>
      </div>
    )
  }
}

export default KodersActive;

/* EJERCICIO

1.  Crear funcionalidad del menú activo (tipo slack)
    Solo un elemento puede estar activo a la vez

    <ul>
      <li>Uno</li>
      <li>Dos</li>
      <li>Tres</li>
    </ul>



2.  Dado un JSON, renderizar todos los elementos en la UI (como el componente Koders)
    volviendo dinámico el menú

    [
      {
        name: 'Uno'
      },
      {
        name: 'Dos'
      },
      {
        name: 'Tres'
      }
    ]

*/