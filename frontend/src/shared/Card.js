import React from 'react'
import deleteProduct from '../pages/products/functions/deleteProduct'
import classes from './Shared.module.css'

const Card = ({id,title,imageUrl,price,description}) => {
  return (
    <div className={classes.card}>
      <h4 >{title}</h4>
      <img src={imageUrl}/><br/>
      <label>{price}</label>
      <p>{description}</p>
      <button onClick={()=>deleteProduct(id)}>Delete</button>
    </div>
  )
}

export default Card
