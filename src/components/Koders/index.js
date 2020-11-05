import React, { Component } from 'react';

// CSS //
import './Koders.css'

const KODERS_JSON = [
  {
    name: 'Axel', // --------> dato tipo string
    age: 31, // --------> dato tipo número
    hobbies: ['play', 'drink', 'surf', 'walk pets', 'netflix'] // --------> dato tipo array de strings
  },
  {
    name: 'Ivan',
    age: 29,
    hobbies: ['basket','chess','videogames']
  },
  {
    name: 'Luis',
    age: 34,
    hobbies: ['money', 'pets', 'social media', 'esports']
  }
]


class Koders extends Component {
  constructor(props){
    super(props);
    this.state = {
      koders: [] // ---------> es un array de objetos porque voy a manejar un JSON
    }
  }

  componentDidMount() {
    console.log('server mounted')
    console.log('Sender Request');
    setTimeout(() => {
      this.setState({
        koders: KODERS_JSON,
      })
    }, 2000)
    console.log('Sender Response');
  }

  // CLASE
  // renderKoders() {
  //   return this.state.koders.map(koder => {
  //     return (
  //       <li>
  //         {koder.name}, {koder.age} años
  //       </li>
  //     )
  //   })
  // }

  // EJERCICIO SOLUCION MAURO
  // renderKoders() {
  //   return this.state.koders.map(koder => {
  //     let koderHobbies = koder.hobbies.map(hobby => {
  //       return <li>{hobby}</li>
  //     })
  //     return (
  //       <li>
  //         {koder.name}, {koder.age} años
  //         <ul>
  //           {koderHobbies}
  //         </ul>
  //       </li>
  //     )
  //   })
  // }

  // EJERCICIO SOLUCION DAVID
  renderKoders() {
    return this.state.koders.map(({name, age, hobbies}) => { // -----------> deconstruye objeto koder
      return (
        <li>
          {name}, {age} años
          <ul>
            {hobbies.map((hobby) => (
              <li>{hobby}</li>
            ))}
          </ul>
        </li>
      )
    })
  }

  render() {
    console.log("render", this.state.koders)
    return (
      <div>
        <ul>
          {this.renderKoders()}
        </ul>
      </div>
    )
  }
}

export default Koders;

// EJERCICIO: AGREGAR AL CÓDIGO LOS HOBBIES

// SOLUCION DE MAURO
// renderKoders() {
//   return this.state.koders.map(koder => {
//     let koderHobbies = koder.hobbies.map(hobby => {
//       return <li>{koder.hobby}</li>
//     })
//     return (
//       <li>
//         {koder.name}, {koder.age} años
//         <ul>
//           {koder.hobby}
//         </ul>
//       </li>
//     )
//   })
// }

// SOLUCION DE DAVID
// renderKoders() {
//   return this.state.koders.map(({name, age, hobbies}) => { // -----------> deconstruye objeto koder
//     return (
//       <li>
//         {name}, {age} años
//         <ul>
//           {hobbies.map((hobby) => {
//             <li>{hobby}</li>
//           })}
//         </ul>
//       </li>
//     )
//   })
// }


// TAREA: FILTRAR LOS KODERS QUE TIENEN MÁS DE 3 HOBBIES