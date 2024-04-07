import React, { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { UserContex } from "../../App"
import "./style.css";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';

const Login = () => {

    const navigateHome = useNavigate();

    const { setToken } = useContext(UserContex)

    const [message, setMessage] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()



    const login_1 = () => {
        const data = { email, password }

        axios.post('http://localhost:5000/user/login', data)
            .then((result) => {
                console.log(result);
                setToken(result.data.token)
                localStorage.setItem("token", result.data.token)
                navigateHome("/Home")
            }).catch((error) => {
                console.log(error)
                setMessage(error.response?.data.message)
            })
    }
    return (
        
            <div className="inputLogin">
                <div className="text-center">
                    <img src='https://mostaql.hsoubcdn.com/uploads/thumbnails/1290811/6234bd2a2eaf1/%D8%B4%D8%B9%D8%A7%D8%B1-%D8%AA%D8%B3%D9%88%D9%82-1-.jpg'
                        style={{ width: '300px',margin:"10px" }} alt="logo"/>
                    <h4 className="mt-1 mb-5 pb-1">Shop Smartly</h4>
                </div>
                <p>Please login to your account</p>
                <input type="email" placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value)
                }}></input>
                <input type="password" placeholder="Password " onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>
                <button className="btn_Login" onClick={login_1}>Login</button>
                {message && <p>{message}</p>}
            </div>
        
    )
}

export default Login;