import React, { useState, useEffect, useContext } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"
import { UserContex } from "../../App"
import { useNavigate } from "react-router-dom";

const AddFavorites = () => {

    const { id } = useParams();

    const [itemFavorati, setItemFavorati] = useState(null)

    const { token } = useContext(UserContex)

    const navgate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/user/by/${id}`)
            .then((resulte) => {
                console.log(resulte.data.result.favorite);
                setItemFavorati(resulte.data.result.favorite);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    return (
        <div>
            {itemFavorati && itemFavorati.imageProduct && (
                <img src={itemFavorati.imageProduct} />
            )}
            <div>
                {itemFavorati && <p> Name Product : {itemFavorati.nameProduct}</p>}

                {itemFavorati && <p> Description Product : {itemFavorati.descriptionProduct}</p>}

                {itemFavorati && <p>Price Product : {itemFavorati.priceProduct} $</p>}

                {itemFavorati?.nameBrand && <p> Name Brand :{itemFavorati.nameBrand}</p>}


                {itemFavorati?.colorsProduct.length ? <p> Colors : {itemFavorati.colorsProduct.map((element, index) => {
                    return (
                        <button key={index} style={{ backgroundColor: `${element}`, height: "20px", width: "35px" }}></button>
                    )
                })}</p> : <></>}



                {itemFavorati?.sizeProduct.length ? <p> Size : {itemFavorati.sizeProduct.map((elem, i) => {
                    return (
                        <div>
                            <p>{elem}</p>
                        </div>
                    )
                })}</p>:<></>}

                {itemFavorati?.producingCountry && <p> Country :{itemFavorati.producingCountry}</p>}



                {/* itemData?.category && <p>Category : {itemData.category}</p> */}

                {<button className="btnfav" onClick={() => {
                    axios.delete(`http://localhost:5000/user/delate/favoratie/${id}`,

                        {},

                        { headers: { Authorization: `Bearer ${token}` } }
                    )

                        .then((resulte) => {
                            console.log(resulte);
                        })
                        .catch((error) => {
                            console.log(error);
                           
                        })
                }}>Delete the product</button>}
                <br></br>
                <div>
                    {<button className="btnfav" onClick={() => {
                        navgate(-1)
                    }}>Back</button>}
                </div>

            </div>

        </div>
    )
}

export default AddFavorites;


