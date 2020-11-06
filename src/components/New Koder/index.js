import React, { Component } from "react";

// CSS
import "./NewKoder.css";

const KODERS_JSON = [
  {
    name: "Axel",
    age: 31,
    hobbies: ["Videogames", "Drink every day"],
  },
  {
    name: "Ivan",
    age: 29,
    hobbies: ["Basketball", "Chess", "Videojuegos"],
  },
  {
    name: "Luis",
    age: 34,
    hobbies: ["Money money", "Pets", "Social media"],
  },
];

class newKoder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      koders: [],
      koderName: "",
      koderAge: "",
    };

    this.handlerNewKoderChange = this.handlerNewKoderChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      console.log("Server Response");
      this.setState({
        koders: KODERS_JSON,
      });
    }, 5000);
  }

  renderKoders() {
    return this.state.koders.map(({ name, age, hobbies }) => {
      return (
        <li>
          {name}, {age} años
          <ul>
            {hobbies.map((hobbie) => {
              return <li>{hobbie}</li>;
            })}
          </ul>
        </li>
      );
    });
  }

  handlerNewKoderChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let { koders, koderName, koderAge } = this.state;
    const newKoder = {
      name: koderName,
      age: koderAge,
      hobbies: [],
    };
    koders.push(newKoder);
    this.setState({
      koders,
      koderName: "",
      koderAge: "",
    });
  }

  render() {
    const { koders, koderName, koderAge } = this.state;
    return (
      <div>
        {koders.length ? (
          <ul>{this.renderKoders()}</ul>
        ) : (
          <h1>No hay Koders</h1>
        )}
        <form onSubmit={this.handleSubmit}>
          Name:{" "}
          <input
            value={koderName}
            onChange={this.handlerNewKoderChange}
            name="koderName"
          />
          Age:{" "}
          <input
            value={koderAge}
            onChange={this.handlerNewKoderChange}
            name="koderAge"
          />
          <button type="submit">Crear Koder</button>
        </form>
      </div>
    );
  }
}

export default newKoder;

/*
1. ABSTRAER el objeto POST de un blog
2. Crear un JSON con varios objetos POST
3. Crear un componente que renderize esos POST's a modo de Cards (como un blog)
4. Añadir un formulario a ese componente para poder añadir POST
Happy Hacking!
*/