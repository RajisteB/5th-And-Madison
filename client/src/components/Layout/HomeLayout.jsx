import React from 'react'
import './HomeLayout.css';

const homeLayout = ( props ) => {
  return (
    <div className="home-layout-grid">
      {props.children}
    </div>
  )
}

export default homeLayout;