import React from 'react';

const NavQuery = ( props ) => {
  return (
    <div className={`query ${props.toggle}`}>
      <input 
        type="text" 
        placeholder="Search..."
        onChange={props.handleNavInput}
        value={props.input} 
      />
      <h4
        onClick={props.toggleNavInput}
      >X</h4>
    </div>
  );
}

export default NavQuery;