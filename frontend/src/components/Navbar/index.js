import { Link } from "react-router-dom";
import './style.css'
const Navbar = () => {
    return (
        <div className="Nav">
      
                
                <Link className="textNav" to="/Register">Register</Link>

                <Link className="textNav" to="/Test">Test</Link>
            
                <Link className="textNav" to="/Home">Home</Link>

                

        </div>
    )
}

export default Navbar;