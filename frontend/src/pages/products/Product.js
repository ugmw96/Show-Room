import React, { useEffect, useState } from 'react'
import Card from '../../shared/Card';

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:8080/api/product/all")
    .then((res) => res.json())
    .then(data => setData([data]))
  },[])
console.log(data);
  return (
    <div>
      {data.length > 1 ? data.map((products)=> {
        return(
          <Card description={products.name} imageUrl={products.image} price={products.price} title={products.name}/>
        )
      }): ''}
    </div>
  )
}

export default Product
