import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminlog.css";
import imge from "../images/adnin login.jpg";
import aimg from "../images/navbar.jpg"

const AdminLogin = () => {
  let navigate = useNavigate();
  
  let email = useRef(null);
  let password = useRef(null);

  let adminLogin = () => {
    if (
      email.current.value == "admin@gmail.com" &&
      password.current.value == 123
    ) {
      navigate("/admin");
      // alert("u logged in...")
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="adm">
      <img src={aimg} alt="" />
    <div className="AdminLogin">
      <img src={imge}  alt="" />
      
      <div className="second"> 
        <h1><span className="sp"> Admin</span> Login</h1>
      <form action="" className="w-50" onSubmit={adminLogin}>
        <div className="loginForm"> 
          <div className="email">
            <input ref={email} type="email" placeholder="enter email address" />
          </div>
          <div className="password">
            <input
              ref={password}
              type="password"
              placeholder="enter your password"
            />
          </div>
          <div className="button">
            <button>login</button>
          </div>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;
