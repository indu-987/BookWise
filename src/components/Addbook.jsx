import "../styles/Addbook.css"
import { useRef } from "react";



const Addbook = () => {

  let title=useRef(null)
  let author=useRef(null)
  let pages=useRef(null)
  let imageLink=useRef(null)


  let submit =(e)=>
  { 
    e.preventDefault()
    let data={
      title:title.current.value,
      author:author.current.value,
      pages:pages.current.value,
      imageLink:imageLink.current.value,
    }
    fetch('http://localhost:5000/books',{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify(data)
  
    

    })
    alert("book added")

  }


 
    return ( 
        <div className="addbook">
             <div className="two">
          <h1>Add Book </h1>
          <form action="" onSubmit={submit} >
            <label htmlFor="">Title</label><br />
            <input ref={title} type="text" placeholder="enter the title" /> <br /><br />
            <label htmlFor="">Author</label><br />
            <input ref={author} type="text" placeholder="enter Author name" /> <br /><br />
            <label htmlFor="">pages</label><br />
            <input  ref={pages} type="number" placeholder="enter number of pages" /> <br /><br />
            <label htmlFor="">Thumbnail Url</label><br />
            <input ref={imageLink} type="text" placeholder="enter url" /> <br /><br />
            <div className="two">
            <button className="btm"> ADD</button>
        </div>
          </form>
        </div>
       
        </div>
     );
}
 
export default Addbook;