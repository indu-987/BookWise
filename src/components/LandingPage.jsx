import { Link } from "react-router-dom";
import logI from "../images/mainlog.png";
import "../styles/Landpage.css"

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="imges">
        <img src={logI} height="400px"  width="400px"  alt="" />
      </div>
      <div className="logpage">
        <h1>Login as ...?</h1>

        <Link to="adminLogin" >Admin Login</Link>
        <Link to="userLogin">User Login</Link>
      </div>
    </div>
  );
};

export default LandingPage;
