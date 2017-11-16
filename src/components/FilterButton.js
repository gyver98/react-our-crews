import React from 'react';
import classNames from 'classnames';

const FilterButton = (props) => (
  <li>
    <button 
      onClick={(e) => props.handleItemClick(e, props.name)} 
      className={classNames("filter-member__option", {"active": props.active })} 
      data-filtermember>
      {props.name}
    </button>
  </li>
)

        
export default FilterButton;