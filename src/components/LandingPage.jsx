import { Link } from "react-router-dom";
import "../styles/Landpage.css";
import Lib from "../images/library.png"
import mbg from "../images/main.jpg"

const LandingPage = () => {
  return (
    
   
     <div className="mm">
      <img src={mbg} width={1100} height={530} alt="" />
    <div className="land">
    
      <img src={Lib} alt="" />
    <div className="LandingPage">
      <div className="imges">
      </div>
      <div className="logpage">
        <h1>Login as ...?</h1>

        <Link to="adminLogin">Admin Login</Link>
        <Link to="userLogin">User Login</Link>
      </div>
    </div>
    </div>
    </div>
  );
};

export default LandingPage;
