// Imports
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MenuHeaderExtended extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Toggle extended dropdown Menu to open or close based on user interaction with the menu header & change toggle state in app.js
    const selectToggleExt = this.props.selectToggleExt;
    return (
      <button className="menu-header" onClick={() => selectToggleExt()}>
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

export default MenuHeaderExtended;
