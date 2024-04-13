import React, { useState, useEffect } from "react"
import axios from "axios";
import { useParams } from "react-router-dom"

const Data = () => {

    const { id } = useParams();
    const [itemData, setItemData] = useState(null)

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
        <div>
            {itemData && itemData.imageProduct && (
                <img src={itemData.imageProduct} />
            )}
            <div>
                {itemData && <p> Name Product : {itemData.nameProduct}</p>}

                {itemData && <p>Description Product : {itemData.descriptionProduct}</p>}

                {itemData && <p>Price Product : {itemData.priceProduct} $</p>}

                {itemData && <p>Brand : {itemData.nameBrand}</p>}

                {/* how to convert Array */}

                {/* itemData && <p> Colors : {itemData.colorsProduct}</p> */}

                {/* how to convert Array */}

                {/* itemData && <p> Size : {itemData.sizeProduct}</p> */}

                {itemData && <p>Country : {itemData.producingCountry}</p>}

                {/* how to convert String */}
                
                {/* itemData && <p>Category : {itemData.category}</p> */}

            </div>

        </div>
    )
}

export default Data;

