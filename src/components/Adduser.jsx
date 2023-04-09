import "../styles/Adduser.css"
import imges from "../images/bag.avif"
import { useRef } from "react";

const Adduser = () => {

  let name=useRef(null)
  let email =useRef(null)
  let phoneNumber=useRef(null)

  let submit=(e)=>
  {
    e.preventDefault()
    let datas={
      name:name.current.value,
      email:email.current.value,
      phoneNumber:phoneNumber.current.value,

    }
    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify(datas)
  
    

    })
    alert("user added")
  }


    return ( 
    <div className="adduser">
      <img src={imges} alt="" />
        <div className="one">
          <h1>Add User</h1>
          <form className="f1" action=""  onSubmit={submit}>
            <label htmlFor="">Name</label><br />
            <input   ref={name} type="text" placeholder="enter name" /><br /><br /> 
            <label htmlFor="">Email</label><br />
            <input    ref={email} type="text" placeholder="enter email" /> <br /><br />
            <label htmlFor="">Contact</label><br />
            <input  ref={phoneNumber} 
               type="number" placeholder="enter number" /><br /><br /> 
                <div className="two1">
            <button>ADD</button></div>
          </form>
         

        
        </div>
        
    </div>
     );
}
 
export default Adduser;