import "../styles/Adduser.css"
import imges from "../images/bag.avif"

const Adduser = () => {
    return ( 
    <div className="adduser">
      <img src={imges} alt="" />
        <div className="one">
          <h1>Add User</h1>
          <form className="f1" action="">
            <label htmlFor="">Name</label><br />
            <input type="text" placeholder="enter name" /><br /><br /> 
            <label htmlFor="">Email</label><br />
            <input type="text" placeholder="enter email" /> <br /><br />
            <label htmlFor="">Contact</label><br />
            <input type="number" placeholder="enter number" /><br /><br /> 
          </form>
          <div className="two1">
            <button>ADD</button>

        </div>
        </div>
        
    </div>
     );
}
 
export default Adduser;