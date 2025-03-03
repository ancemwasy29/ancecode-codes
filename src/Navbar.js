import Accessories from "./Accessories";
import Pc from "./Pc";

const Navbar = () => {
  const pc = ["hp", "Dell", "Mac", "Lenovo", "Samsung", "Assus", "select"];
  const accessories = ["Laptop Accessories", "Flash disk", "Hard Disk Drive(HDD)", "Solid State disk(SSD)", 
       "RAM DDR4", "RAM DDR3", "Laptop bags", "Wireless Mouse", "Wired mouse" ];
  return (
    <div className="navBarcontainer">
      <div className="linksContainer">
      <div className="listOfLinks">
        <div className="linkToHome"> Home </div>

        <div className="linkToPc">
          <Pc pc={pc} />
        </div>

        <div className="linkToaccessories">
<Accessories accessories={accessories}/>
        </div>
        <div>
          <button className="linkToShop"> Shop Now </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
