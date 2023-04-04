const UserLogin = () => {
  return ( 
      <div className="UserLogin">
          <h1>User Login</h1>

          <div className="loginForm">
              <div className="email">
                  <input type="email" placeholder="enter email address" />
              </div>
              <div className="password">
                  <input type="password" placeholder="enater your password" />
              </div>
              <div className="button">
                  <button>login</button>
              </div>
          </div>
      </div>
   );
}

export default UserLogin;