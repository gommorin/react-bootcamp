import React from 'react'

// Importar CSS
import "./Greet.css"


// class Greet extends React.Component {
//     render() {
//         return (
//             <h1>
//                 {`Hola ${this.props.name}`}
//             </h1>
//         )
//     }
// }

/*
Podemos desestructurar React y podemos escribir la importación como:
import React, { Component } from 'react'

class Greet extends Component {

}
*/

function Greet(props) {
    return (
        <h1 className={'heading'}>
            {`Hola ${props.name}`}
        </h1>
    )
}


export default Greet