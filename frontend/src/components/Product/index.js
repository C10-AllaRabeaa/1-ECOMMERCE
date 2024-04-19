import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./style.css"

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
    <div className='containerP'>
    <div className='cc'>{product && product.map((element, index) => {
      return (
        <div className='pp' key={index}>
          <img src={element.imageProduct} onClick={() => {
            navegat(`/data/${element._id}`)
          }} />
          <p>{element.nameProduct}</p>
        </div>
      )
    })}
    {<button className="btnfav" onClick={() => {
      navegat(`/`)
  }}>Back</button>}
    </div>
    </div>
  )
}

export default Product;