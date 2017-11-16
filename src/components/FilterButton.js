import React from 'react';
import classNames from 'classnames';

const FilterButton = (props) => (
  <li>
    <button 
      onClick={(e) => props.handleItemClick(props.name, props.filterMember)} 
      className={classNames("filter-member__option", {"active": props.active })} 
      data-filtermember={props.filterMember}>
      {props.name}
    </button>
  </li>
)

        
export default FilterButton;