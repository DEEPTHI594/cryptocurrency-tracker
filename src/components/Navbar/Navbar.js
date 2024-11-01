import './Navbar.css';
import logo from '../../assests/suj 2.0.png';
import { FaArrowRightToBracket } from "react-icons/fa6";
function Navbar() {
    return (
      <div className='navbar'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up<FaArrowRightToBracket /></button>
        </div>
  
      </div>
    );
  }
  
  export default Navbar;
  