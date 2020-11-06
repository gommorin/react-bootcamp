import React, { Component } from "react";

// CSS
import "./ListActive.css";

class ListActive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: null,
    };
  }

  handleItemClick(indexItem) {
    this.setState({
      activeItem: indexItem,
    });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <ul>
          <li
            className={`item ${activeItem === 0 ? "active" : null}`}
            onClick={() => this.handleItemClick(0)}
          >
            Item 1
          </li>
          <li
            className={`item ${activeItem === 1 ? "active" : null}`}
            onClick={() => this.handleItemClick(1)}
          >
            Item 2
          </li>
          <li
            className={`item ${activeItem === 2 ? "active" : null}`}
            onClick={() => this.handleItemClick(2)}
          >
            Item 3
          </li>
          <li
            className={`item ${activeItem === 3 ? "active" : null}`}
            onClick={() => this.handleItemClick(3)}
          >
            Item 4
          </li>
          <li
            className={`item ${activeItem === 4 ? "active" : null}`}
            onClick={() => this.handleItemClick(4)}
          >
            Item 5
          </li>
        </ul>
      </div>
    );
  }
}

export default ListActive;