import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const {category, productid} = useParams()
  return (
    <div>Product Page 

      {category}
      {"      "}
      {productid}
    </div>
  )
}

export default Product