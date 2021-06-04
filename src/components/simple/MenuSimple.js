// Imports
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MenuSimple extends Component {
  constructor(props) {
    super(props);
    this.searchFocus = this.searchFocus.bind(this);
    this.state = {
      searchInput: '',
    };
  }

  searchFocus = (e) => {
    this.setState((state) => ({
      searchInput: e.target.value,
    }));
  };

  render() {
    const searchToggle = this.props.searchToggle;

    // Change selected state of data to true or false
    const selectItem = this.props.selectItem;

    // Group data & create a array based on category
    const groupBy = this.props.list.reduce((cat, { category }) => {
      if (!cat[category]) cat[category] = [];

      // Filter array based on category
      const catItem = this.props.list.filter(
        (item) => item.category == category
      );

      // Push new filtered object array
      cat[category] = [...catItem];

      return cat;
    }, {});

    const filteredSearch = groupBy.computer.filter((search) => {
      return search.title
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const filteredSearchOth = groupBy.other.filter((search) => {
      return search.title
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    return (
      <div className="menu-dropdown-container">
        <div className="search">
          <input
            onChange={this.searchFocus}
            onClick={() => searchToggle()}
            value={this.state.searchInput}
            type="text"
            placeholder="Search"
            className="search-control"
          />
        </div>
        {filteredSearch.map((item) => (
          <button
            className={
              item.selected
                ? 'menu-dropdown-selected menu-simple'
                : 'menu-dropdown menu-simple'
            }
            key={item.id}
            onClick={() => selectItem(item.id)}
          >
            {item.selected && (
              <FontAwesome name="check" style={{ marginRight: 12 }} />
            )}
            {item.title}
          </button>
        ))}

        {/* Divider */}
        <hr className="divider" />

        {filteredSearchOth.map((oth) => (
          <button
            className={
              oth.selected
                ? 'menu-dropdown-selected menu-simple'
                : 'menu-dropdown menu-simple'
            }
            key={oth.id}
            onClick={() => selectItem(oth.id)}
          >
            {oth.selected && (
              <FontAwesome name="check" style={{ marginRight: 12 }} />
            )}
            {oth.title}
          </button>
        ))}
      </div>
    );
  }
}

export default MenuSimple;
