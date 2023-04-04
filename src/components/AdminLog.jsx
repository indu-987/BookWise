import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const AdminLogin = () => {
    let navigate = useNavigate()
    let email = useRef(null)
    let password = useRef(null)

    let adminLogin = () => {
        if(email.current.value == "admin@gmail.com" && password.current.value == 123) {
            navigate('/admin')
            // alert("u logged in...")
        } else {
            alert('Invalid credentials')
        }
    }

    return ( 
        <div className="AdminLogin">
            <h1>Admin Login</h1>

            <form action="" className="w-50" onSubmit={adminLogin}>
                <div className="loginForm">
                    <div className="email">
                        <input ref={email} type="email" placeholder="enter email address" />
                    </div>
                    <div className="password">
                        <input ref={password} type="password" placeholder="enter your password" />
                    </div>
                    <div className="button">
                        <button>login</button>
                    </div>
                </div>
            </form>
        </div>
     );
}

export default AdminLogin;