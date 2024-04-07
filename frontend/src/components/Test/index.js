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
    MDBIcon,
    MDBInput
}
from 'mdb-react-ui-kit';
const Test = () => {


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
        <>
            <MDBContainer fluid>
                <MDBRow>

                    <MDBCol sm='6'>

                        <div className='d-flex flex-row ps-5 pt-5'>
                            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }} />
                            <img src='https://mostaql.hsoubcdn.com/uploads/thumbnails/1290811/6234bd2a2eaf1/%D8%B4%D8%B9%D8%A7%D8%B1-%D8%AA%D8%B3%D9%88%D9%82-1-.jpg'
                                style={{ width: '250px', marginLeft: "-15px" }} alt="logo" />
                        </div>

                        <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>


                            <p  className="small mb-5 pb-lg-3 ms-5" >Please login to your account</p>
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
                            <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

                        </div>

                    </MDBCol>



                </MDBRow>

            </MDBContainer>
        </>
    );
}

export default Test;


