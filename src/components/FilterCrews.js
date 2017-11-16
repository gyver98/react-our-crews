import React, { Component } from 'react';
import FilterButton from './FilterButton';

class FilterCrews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'all'
    }
    this._handleItemClick = this._handleItemClick.bind(this);
  }

  _handleItemClick = (e, name ) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <ul className="filter-member">
        <FilterButton handleItemClick={this._handleItemClick} active={activeItem === 'all'} name='all' />
        <FilterButton handleItemClick={this._handleItemClick} active={activeItem === 'melbourne'} name='melbourne' />
        <FilterButton handleItemClick={this._handleItemClick} active={activeItem === 'sydney'} name='sydney' />
      </ul>
    )
  }
}

export default FilterCrews;
