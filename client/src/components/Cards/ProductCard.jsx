import React from 'react';
import './ProductCard.css';
import { Link, withRouter } from 'react-router-dom';

const imgStyle = {
  maxHeight: '75%',
  maxWidth: '100%'
}

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
  textAlign: 'center',
  margin: '0px',
  padding: '0px',
}

const ProductCard = ( props ) => {
  return (
    props.items.map((prod, index) => {
      return (
        <div key={index} className="product-card">
          {prod ? 
            <img src={prod.imageURI} alt="" style={imgStyle}/> :
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          }
          <Link to={`/${prod.prodID}`} style={linkStyle}>
            <h3>{props.company.toUpperCase()}</h3>
            <h4>{prod.caption.charAt(0).toUpperCase() + prod.caption.substr(1)}</h4>
            <h5>{prod.priceInfo.price}</h5>
          </Link>
        </div>
      );
    })
  )
}

export default withRouter(ProductCard);