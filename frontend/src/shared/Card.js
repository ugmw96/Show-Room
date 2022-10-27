import React from 'react'
import classes from './Shared.module.css'

const Card = ({title,imageUrl,price,description}) => {
  return (
    <div className={classes.card}>
      <h4 >{title}</h4>
      <img src={imageUrl}/><br/>
      <label>{price}</label>
      <p>{description}</p>
      <button>Add</button>
    </div>
  )
}

export default Card
