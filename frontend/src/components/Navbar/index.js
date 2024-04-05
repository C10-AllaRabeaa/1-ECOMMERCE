import { Link } from "react-router-dom";
import './style.css'
const Navbar = () => {
    return (
        <div className="Nav">
      
                
                <Link to="/Register">Register</Link>
                ||
                <Link to="/Login">Login</Link>
                ||
                <Link to="/Dashbord">Dashbord</Link>

        </div>
    )
}

export default Navbar;