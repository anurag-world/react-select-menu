// Imports
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MenuHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Toggle dropdown Menu to open or close based on user interaction with the menu header & change toggle state in app.js
    const selectToggle = this.props.selectToggle;
    return (
      <button className="menu-header" onClick={() => selectToggle()}>
        {this.props.header}
        <FontAwesome
          className="icon-color"
          style={{ marginLeft: 12 }}
          name="angle-down"
        />
      </button>
    );
  }
}

export default MenuHeader;
