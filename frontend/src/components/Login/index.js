import React,{ useContext, useState }  from "react";
import axios from "axios"
import { UserContex } from "../../App"

const Login = () => {

    const { setToken } = useContext(UserContex)

    const [message, setMessage] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()



    const login_1 = () => {
        const data = { email, password }

        axios.post('http://localhost:5000/users/login', data)
            .then((result) => {
                console.log(result);
                setToken(result.data.token)
                localStorage.setItem("token",result.data.token)
            }).catch((error) => {
                console.log(error)
                setMessage(error.response?.data.message)
            })
    }
    return (
        <div className="inputLogin">
            <p>Login:</p>
            <input type="email" placeholder="Email" onChange={(e) => {
                setEmail(e.target.value)
            }}></input>
            <input type="password" placeholder="Password " onChange={(e) => {
                setPassword(e.target.value)
            }}></input>
            <button onClick={login_1}>Login</button>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Login;