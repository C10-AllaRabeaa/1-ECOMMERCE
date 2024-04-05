import React, {  useState } from "react"
import axios from "axios"

const Register = () =>{

    const [message,setMessage]= useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [age, setAge] = useState()
    const [country, setCountry] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const submited = () => {
        const data = { firstName, lastName, email, password, age, country }

        axios.post('http://localhost:5000/users/register', data)
        .then((result) => {
            setMessage (result.data.message)
        }).catch((error) => {
            setMessage(error.response.data.message)
        })
    }

    return(
        <div className="inputRegister">
        <p>Register:</p>
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
        <button onClick={submited}>Register</button>
        {message && <p>{message}</p>}

    </div>
    )
}

export default Register;