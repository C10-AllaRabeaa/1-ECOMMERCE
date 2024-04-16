import { Link } from "react-router-dom";
import './style.css'
const Navbar = () => {
    return (
        <div className="Nav">
      
                
                <Link className="textNav" to="/Register">Register</Link>

                <Link className="textNav" to="/Login">Login</Link>
            
                <Link className="textNav" to="/">Home</Link>

                <Link className="textNav" to="/AddFavorites/:id">Favorites</Link>

        



                

        </div>
    )
}

export default Navbar;