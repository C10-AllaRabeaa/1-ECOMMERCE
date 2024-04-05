import React, { useState, useEffect, useContext } from "react"
import axios from "axios";
import { UserContex } from "../../App";


const Dashbord = () => {
    // const { token } = useContext(UserContex)
//   console.log(token)
    const [article, setarticle] = useState([])

    // useEffect(() => {
      
    //     axios.get("http://localhost:5000/articles", {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     })
    //         .then((res) => {
    //             console.log(res.data);
    //             setarticle(res.data.article);

    //         }).catch((error) => {
    //             console.log(error);
    //         }
    //         )
    // }, []);
    const funDelete = (id) => { };
    const funUpdate = (id) => { };
    const funAddComment = (id) => { };
    return (
        <div>
        <h1>Hello</h1>
            {article.length && article.map((article, i) => {
                console.log(article);
                return (
                    <div key={i}>
                        <p>{article.title}</p>
                        <p>{article.description}</p>
                        <button>Update</button>
                    </div>
                )

            })
            }
        </div>)
}
export default Dashbord;