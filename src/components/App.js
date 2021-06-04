// Imports
import React, { Component } from 'react';
import Menu from './simple/Menu';
import MenuExt from './extended/MenuExt';

class Main extends Component {
  constructor(props) {
    super(props);

    // Initializing the state & data
    this.state = {
      // Dark Mode
      darkMode: false,
    };
  }

  // Toggle Dark Mode
  toggleDarkMode = () => {
    this.setState((state) => ({
      darkMode: !state.darkMode,
    }));
  };

  render() {
    return (
      <div
        className="container"
        data-theme={this.state.darkMode ? 'dark' : 'light'}
      >
        <div>
          <button className="dark-mode-btn" onClick={this.toggleDarkMode}>
            {this.state.darkMode
              ? 'Switch to Light Mode'
              : 'Switch to Dark Mode'}
          </button>
        </div>

        <div className="select-menu">
          {/* Simple Menu */}
          <div className="simple-menu">
            <h4 style={{ marginBottom: 20 }}>Simple Menu: </h4>
            <Menu />
          </div>

          {/* Extended Menu */}
          <div>
            <h4 style={{ marginBottom: 20 }}>Extended Menu: </h4>
            <MenuExt />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
