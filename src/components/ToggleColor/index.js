import React, {Component} from 'react';

// CSS //
import './ToggleColor.css';

class ToggleColor extends Component{
  constructor(props){
    super(props)
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
        <h1 className={isActive ? 'active' : null}>Hola</h1> {/*// ----> Conditional Rendering usando ternarios*/}
        <button onClick={() => this.handleClick()}>{isActive ? 'ON' : 'OFF'}</button>
      </div>
    )
  }
}

export default ToggleColor