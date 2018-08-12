import React from 'react';
import './ProductCard.css';

const imgStyle = {
  maxHeight: '75%',
  maxWidth: '100%'
}

const ProductCard = ( props ) => {
  return (
    props.items.map((prod, index) => {
      return (
      <div key={index} className="product-card">
        <h3>{prod.caption}</h3>
        <h4>{prod.catalogName}</h4>
        <img src={prod.imageURI} alt="" style={imgStyle}/>
        <h5 style={{ 'textDecoration': 'line-through' }}>{prod.regularPrice}</h5>
        <h5>{prod.priceInfo.price}</h5>
      </div>
      )
    })
  )
}

export default ProductCard;