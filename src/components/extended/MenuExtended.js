// Imports
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class MenuExtended extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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

    return (
      <div className="menu-dropdown-container">
        {groupBy.computer.map((item) => (
          <button
            className={
              item.selected
                ? 'menu-dropdown-selected menu-ext'
                : 'menu-dropdown menu-ext'
            }
            key={item.id}
            onClick={() => selectItem(item.id)}
          >
            {item.selected && (
              <FontAwesome name="check" style={{ marginRight: 12 }} />
            )}

            <div>
              {item.title}
              <p className={item.selected ? 'menu-desc-selected' : 'menu-desc'}>
                {item.desc}
              </p>
            </div>
          </button>
        ))}

        {/* Divider */}
        <hr className="divider" />

        {groupBy.other.map((oth) => (
          <button
            className={
              oth.selected
                ? 'menu-dropdown-selected menu-ext'
                : 'menu-dropdown menu-ext'
            }
            key={oth.id}
            onClick={() => selectItem(oth.id)}
          >
            {oth.selected && (
              <FontAwesome name="check" style={{ marginRight: 12 }} />
            )}
            <div>
              {oth.title}
              <p className={oth.selected ? 'menu-desc-selected' : 'menu-desc'}>
                {oth.desc}
              </p>
            </div>
          </button>
        ))}
      </div>
    );
  }
}

export default MenuExtended;
