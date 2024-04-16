import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./style.css"

const Register = () => {

    const navigateLogin = useNavigate();

    const [message, setMessage] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [age, setAge] = useState()
    const [country, setCountry] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [isLoading, setIsLoading] = useState(false);


    const submited = () => {
        if (!firstName || !lastName || !age || !country || !email || !password) {
            setMessage("Registration failed. Please fill in all fields.");
            return;
        }else  {
            setMessage ("Registration successful.");
        }
        setIsLoading(true);

        const data = { firstName, lastName, age, country, email, password }

        axios.post('http://localhost:5000/user/register', data)
            .then((result) => {
                setMessage(result.data.message)
                navigateLogin("/Login")
            }).catch((error) => {
                console.log((error));
                setMessage(error.response.data.message)
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 3000);
            });
    }

    return (
        <div className="pageRegister">
            <div className="inputRegister">
                <p>Create a new account </p>
                <input type="text" placeholder="First Name" onChange={(e) => {
                    setFirstName(e.target.value)
                }}></input>
                <input type="text" placeholder="Last Name" onChange={(e) => {
                    setLastName(e.target.value)
                }}></input>
                <input type="number" placeholder="Age" onChange={(e) => {
                    setAge(e.target.value)
                }}></input>
                <input type="text" placeholder="Country" onChange={(e) => {
                    setCountry(e.target.value)
                }}></input>
                <input type="email" placeholder="Email" onChange={(e) => {
                    setEmail(e.target.value)
                }}></input>
                <input type="password" placeholder="Password " onChange={(e) => {
                    setPassword(e.target.value)
                }}></input>
                <button onClick={submited} disabled={isLoading}> {isLoading ? <span>Loading...</span> : <span>Register</span>}</button>
                {isLoading && (
                    <div className="loading-container">
                        <div className="loading-circle"></div>
                    </div>
                )}
                {message && <p>{message}</p>}

            </div>
        </div>
    )
}

export default Register;