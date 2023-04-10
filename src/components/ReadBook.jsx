import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/readbook.css"


const ReadBook = () => {
    
let params=useParams()
let [newd,newda]=useState([])

useEffect(()=>
{
    let fet= async()=>{
        let response= await fetch(`http://localhost:5000/books/${params.id}`);
        let data = await response.json()
        newda(data)
    }
    fet()
})

    return ( 

        <div className="readbook">
           
        <img src={newd.imageLink} width={150}/>
         <p>Title:{newd.title}</p>
         <p>Author:{newd.author}</p>
         <p>Price:{newd.pages}</p>
         
         <p>{newd.description}</p>

        </div>
     );
}
 
export default ReadBook;