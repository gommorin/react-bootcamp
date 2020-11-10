import React, { Component } from "react";

// Components
import CustomInput from "../CustomInput";

// CSS
import "./Koders.css";

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

class Koders extends Component {
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
    let kodersInMemory = localStorage.getItem("koders");
    if (kodersInMemory) {
      this.setState({
        koders: JSON.parse(kodersInMemory),
      });
    } else {
      setTimeout(() => {
        localStorage.setItem("koders", JSON.stringify(KODERS_JSON));
        this.setState({
          koders: KODERS_JSON,
        });
      }, 5000);
    }
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

  handlerNewKoderChange(name, value) {
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
    let kodersInMemory = JSON.parse(localStorage.getItem("koders"));
    kodersInMemory.push(newKoder);
    localStorage.setItem("koders", JSON.stringify(kodersInMemory));
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
          <CustomInput
            type="text"
            value={koderName}
            name="koderName"
            callback={this.handlerNewKoderChange}
          />
          Age:{" "}
          <CustomInput
            type="text"
            value={koderAge}
            name="koderAge"
            callback={this.handlerNewKoderChange}
          />
          Hobbies:{" "}
          <CustomInput
            type="text"
            value={koderAge}
            name="koderAge"
            callback={this.handlerNewKoderChange}
          />
          <button type="submit">Crear Koder</button>
        </form>
      </div>
    );
  }
}

export default Koders;