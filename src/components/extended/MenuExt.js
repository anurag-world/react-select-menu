// Imports
import React, { Component } from 'react';
import list from '../../data/listExt.json';

// Component Imports
// Simple Menu
import MenuHeaderExtended from './MenuHeaderExtended';
import MenuExtended from './MenuExtended';

class MenuExt extends Component {
  constructor(props) {
    super(props);

    // Initializing the state & data
    this.state = {
      // List JSON data
      list,

      // Toggle simple Menu
      toggleExt: false,
    };
  }

  // Change selected state of data to true or false
  selectItem = (item) => {
    // Populate data into a new array based on selected item
    const newSelect = [...this.state.list];
    newSelect.forEach((arr) => (arr.selected = false));
    newSelect[item - 1].selected = true;

    // Set new state with new array & set menu dropdown to close after user selects an option
    this.setState({
      [item]: newSelect,
      toggleExt: false,
    });
  };

  // Toggle dropdown Menu to open or close based on user interaction with the menu header
  // Simple Menu
  selectToggleExt = () => {
    this.setState((state) => ({
      toggleExt: !state.toggleExt,
    }));
  };

  // Adding click event listener to close dropdown menu when user clicks outside the menu container
  // Set state to close
  hide = () => {
    this.setState({
      toggleExt: false,
    });
  };

  // Adding click event listener
  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.toggleExt) {
        window.addEventListener('click', this.hide);
      } else {
        window.removeEventListener('click', this.hide);
      }
    }, 0);
  }

  render() {
    // Show selected menu header
    // Filter selected menu object
    const listSelected = this.state.list.filter(
      (item) => item.selected == true
    );

    // Get title for selected menu object
    const menuTitle = listSelected.map((item) => item.title);

    return (
      <>
        <MenuHeaderExtended
          header={menuTitle}
          selectToggleExt={this.selectToggleExt}
        />
        {/* If toggle is true, show dropdown menu */}
        {this.state.toggleExt == true && (
          <MenuExtended list={this.state.list} selectItem={this.selectItem} />
        )}
      </>
    );
  }
}

export default MenuExt;
