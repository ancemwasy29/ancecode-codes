import { FaCartPlus, FaUserCircle } from "react-icons/fa";
import levels from "./levels.jpg";
import  "./Main.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Pc from "./Pc";

const Header = () => {
const pc = ["hp", "Dell",  "Mac", "Lenovo", "Samsung", "Assus", "select"];  
 return (
    <div className="headerContainer">
      <div className="logoContainer">
        <div src="levels.png" />
        <img src={levels} alt="LOGO" />
      </div>
      <div className="searchContainer">
        <div className="searcInput">
          <form>
            <input type="text" />
          </form>
        </div>
<div className="laptopTypes">
<Pc  pc= {pc} />
</div>
        <div className="searchIconContainer">

            <FaMagnifyingGlass size={30} color="aqua" />
          
        </div>
      </div>
      <div className="userAccountContainer">
        <FaUserCircle width={40} size={50} color="green" />
      </div>
      <div className="cartIcoinContainer">
        <FaCartPlus size={50} color="orange" />
      </div>
    </div>
  );
};

export default Header;
