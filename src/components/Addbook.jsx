import "../styles/Addbook.css"
// import bi from "../images/boook.webp"


const Addbook = () => {
    return ( 
        <div className="addbook">
          {/* <img src={bi} alt="" /> */}
             <div className="two">
          <h1>Add Book </h1>
          <form action="">
            <label htmlFor="">Title</label><br />
            <input type="text" placeholder="enter the title" /> <br /><br />
            <label htmlFor="">Author</label><br />
            <input type="text" placeholder="enter Author name" /> <br /><br />
            <label htmlFor="">Genre</label><br />
            <input type="number" placeholder="enter Genre" /> <br /><br />
            <label htmlFor="">Thumbnail Url</label><br />
            <input type="text" placeholder="enter url" /> <br /><br />
          </form>
        </div>
        <div className="two">
            <button className="btm"> ADD</button>

        </div>
        </div>
     );
}
 
export default Addbook;