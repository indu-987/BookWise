import { Link } from "react-router-dom";
import "../styles/usernavbar.css"

const UserNavbar = () => {
  return (
    <div className="MainN">
      {/* <img src={bg} alt="" /> */}
      
      <div className="Onee Na-cenet">
        <ul>
          <li>
            <Link to="/user/">Home</Link>
          </li>
          
          <li>
            <Link to="/user/bookList/">Book List </Link>
          </li>
          
        </ul>
           
      </div>
      <button className="Btn"> <Link to="/"> LogOut</Link></button>
    </div>
  );
};

export default UserNavbar;
