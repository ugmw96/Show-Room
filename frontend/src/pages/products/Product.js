import React, { useEffect, useState } from 'react'
import Card from '../../shared/Card';
import Loading from '../../shared/loading/Loading';
import classes from './Product.module.css';

const Product = () => {
  const [data, setData] = useState();
  const [loading, isLoading] = useState(true);

  useEffect(()=> {
    const products = async () => {
      isLoading(true)
      await fetch("http://localhost:8080/api/product/all")
      .then((res) => res.json())
      .then(data => setData(data))
      isLoading(false);
    }
    products();
  },[])
console.log(data);
  return (
    <div>
      {loading && <Loading/>}
      {!loading && 
      data.map((products)=> {
        return(
          <div className={classes.cardSet}>
            <Card description={products.description} imageUrl={products.image} price={products.price} title={products.name}/>
          </div>
          
        )
      })
      }
    </div>
  )
}

export default Product
