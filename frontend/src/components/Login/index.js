import React, { useContext, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { UserContex } from "../../App"
import "./style.css"

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
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
                navigateHome("/")
            }).catch((error) => {
                console.log(error)
                setMessage(error.response?.data.message || "An error occurred during login.");
            })
    }


    return (
        
            <MDBContainer fluid>
                <MDBRow>

                    <MDBCol sm='6'>

                        <div className='pageLogin'>

                            <div className="inputRegister">
                            <p  className="" >Please login to your account</p>
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />

                            <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={login_1}>Login</MDBBtn>
                            {message && <p>{message}</p>} 
                            <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
                            
                            <p className='ms-5'>Don't have an account? <Link  to="/Register">Register here</Link></p>
                            </div>
                            

                        </div>

                    </MDBCol>



                </MDBRow>

            </MDBContainer >
        
    );
}

export default Login;


