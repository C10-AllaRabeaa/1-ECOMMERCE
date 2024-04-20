import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./style.css"

function Product() {

  const { id } = useParams();
  // console.log(id);

  const navigate = useNavigate()

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
    <div className='containerA'>
      <div className='columnsA'>
        {product && product.map((element, index) => (
          <div className='columnA' key={index}>
            <img src={element.imageProduct} alt={element.nameProduct} onClick={() => {
              navigate(`/data/${element._id}`);
            }} />
            <p>{element.nameProduct}</p>
          </div>
        ))}
      </div>
      <div>
        <button className="btnfav" onClick={() => {
          navigate(`/`);
        }}>Back</button>
      </div>
    </div>
  );
}

export default Product;