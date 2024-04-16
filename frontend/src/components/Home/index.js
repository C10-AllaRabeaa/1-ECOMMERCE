import React, { useState, useEffect } from "react"
import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./style.css"

const Home = () => {

const [itemCategory, setItemCategory]= useState()

const navgate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:5000/category/allcategory')
        .then((result)=>{
            //console.log(result.data.category);
            setItemCategory(result.data.category);
        })
        .catch((error)=>{
            console.log(error);

        })
    });

    return (
        <div className="container">
        
            <div className="item">
            {itemCategory && itemCategory.map((element,index)=>{
                return (
                    <div key={index}>
                    <img src={element.image} onClick={()=>{
                        navgate(`/product/${element._id}`)  
                    }}/>
                    <p>{element.title}</p>
                    </div>
                )
            })}

            </div>
        </div>)
}
export default Home;