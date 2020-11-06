import React, { Component } from "react";

// CSS //
import './FormClick.css'

class FormClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MXNQuantity: 0,
      USDQuantity: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({
      MXNQuantity: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { MXNQuantity } = this.state;
    this.setState({
      USDQuantity: MXNQuantity / 21.6,
    });
  }

  render() {
    const { MXNQuantity, USDQuantity } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={MXNQuantity}
            onChange={this.handleChange}
          />
          <button type="submit">Convertir</button>
        </form>
        <p>USD: ${USDQuantity.toFixed(2)}</p>
      </div>
    );
  }
}

export default FormClick