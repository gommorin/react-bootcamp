import React, { Component } from "react";

// CSS //
import './FormClickMXN.css'

class FormClickMXN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MXNQuantity: 0,
      USDQuantity: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeUSD = this.handleChangeUSD.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({
      MXNQuantity: value,
      USDQuantity: value / 21.6
    });
  }

  handleChangeUSD({ target: { value }}) {
    this.setState({
      USDQuantity: value,
      MXNQuantity: value * 21.6
    })
  }


  render() {
    const { MXNQuantity, USDQuantity } = this.state;
    return (
      <div>
        <form>
          MXN:{' '}
          <input
            type='number'
            value={MXNQuantity}
            onChange={this.handleChange}
          />
          USD:{' '}
          <input
            type='number'
            value={USDQuantity}
            onChange={this.handleChangeUSD}
          />
        </form>
      </div>
    );
  }
}

export default FormClickMXN