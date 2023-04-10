import "../styles/userlogin.css"
import { useNavigate } from "react-router-dom";


const UserLogin = () => {
 let navigate = useNavigate()

 let submit=()=>{
    navigate('/user')
 }

  return ( 
      <div className="UserLogin">
          <h1>User Login</h1>

          <div className="loginForm">
          <form action="" onSubmit={submit}>
              <div className="email">
                
                  <input type="email" placeholder="enter email address" />
              </div>
              <div className="password">
                  <input type="password" placeholder="enater your password" />
              </div>
              <div className="button">
                  <button>login</button>
              </div>
              </form>
          </div>
      </div>
   );
}

export default UserLogin;