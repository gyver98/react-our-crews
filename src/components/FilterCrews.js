import React, { Component } from 'react';
import classNames from 'classnames';

class FilterCrews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterAll: true,
      filterMel: false,
      filterSyd: false
    }
    this._toggleFilterActive = this._toggleFilterActive.bind(this);

  }

_toggleFilterActive() {
  this.setState(prevState => ({
    filterAll: !prevState.filterAll,
    filterMel: !prevState.filterMel,
    filterSyd: !prevState.filterSyd
  }))
}


  render() {
    return (
      <ul className="filter-member">
        <li><button onClick={this._toggleFilterActive} className={classNames("filter-member__option", {"active": this.state.filterAll})} data-filtermember>All</button></li>
        <li><button onClick={this._toggleFilterActive} className={classNames("filter-member__option", {"active": this.state.filterMel})} data-filtermember="melbourne-active">Melbourne</button></li>
        <li><button onClick={this._toggleFilterActive} className={classNames("filter-member__option", {"active": this.state.filterSyd})} data-filtermember="sydney-active">Sydney</button></li>
      </ul>
    )
  }
}

export default FilterCrews;
