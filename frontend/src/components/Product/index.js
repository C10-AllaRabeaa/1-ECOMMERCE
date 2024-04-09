import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Product() {

  const { id } = useParams();
 // console.log(id);

  const navegat = useNavigate()

  const [product, setProduct] = useState(null)


  useEffect(() => {
    axios.get(`http://localhost:5000/product/category/${id}`)
      .then((result) => {
        //console.log(result.data.category);
        setProduct(result.data.category);
      })
      .catch((error) => {
        console.log(error);

      })
  });
  return (
    <div>{product && product.map((element, index) => {
      return (
        <div>
          <img src={element.imageProduct} onClick={() => {
            navegat(`/data/${element._id}`)
          }} />
          <p>{element.nameProduct}</p>
        </div>
      )
    })}
    </div>
  )
}

export default Product