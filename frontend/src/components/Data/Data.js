import React, { useState, useEffect, useContext } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"
import { UserContex } from "../../App"
import { useNavigate } from "react-router-dom";
import "./style.css"

const Data = () => {

    const { id } = useParams();
    const [itemData, setItemData] = useState(null)

    const { token } = useContext(UserContex)

    const navgate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/product/item/${id}`)
            .then((resulte) => {
                console.log(resulte.data.resulte);
                setItemData(resulte.data.resulte);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
       <div className="containere">
       <div>
       {itemData && itemData.imageProduct && (
           <img src={itemData.imageProduct} />
       )}
       <div>
           {itemData && <p> Name Product : {itemData.nameProduct}</p>}

           {itemData && <p>Description Product : {itemData.descriptionProduct}</p>}

           {itemData && <p>Price Product : {itemData.priceProduct} $</p>}

           {itemData?.nameBrand && <p> Name Brand :{itemData.nameBrand}</p>}


           {itemData?.colorsProduct.length ? <p> Colors : {itemData.colorsProduct.map((element, index) => {
               return (
                   <button key={index} style={{ backgroundColor: `${element}`, height: "20px", width: "35px" }}></button>
               )
           })}</p> : <></>}



           {itemData?.sizeProduct.length ? <p> Size : {itemData.sizeProduct.map((elem, i) => {
               return (
                   <div>
                       <p>{elem}</p>
                   </div>
               )
           })}</p>:<></>}

           {itemData?.producingCountry && <p> Country :{itemData.producingCountry}</p>}



           {/* itemData?.category && <p>Category : {itemData.category}</p> */}

           {<button className="btnfav" onClick={() => {
               axios.put(`http://localhost:5000/user/add/favoratie/${id}`,

                   {},

                   { headers: { Authorization: `Bearer ${token}` } }
               )

                   .then((resulte) => {
                       console.log(resulte);
                   })
                   .catch((error) => {
                       console.log(error);
                      
                   })
           }}>Add To Favorites</button>}
           <br></br>
           <div>
               {<button className="btnfav" onClick={() => {
                   navgate(-1)
               }}>Back</button>}
           </div>

       </div>

   </div>
       </div>
    )
}

export default Data;





