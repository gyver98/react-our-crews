import React, { Component } from 'react';

class FilterCrews extends Component {
  render() {
    return (
      <ul className="filter-member">
        <li><button className="filter-member__option active" data-filtermember>All</button></li>
        <li><button className="filter-member__option" data-filtermember="melbourne-active">Melbourne</button></li>
        <li><button className="filter-member__option" data-filtermember="sydney-active">Sydney</button></li>
      </ul>
    )
  }
}

export default FilterCrews;
