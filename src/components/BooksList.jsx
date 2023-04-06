import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/booklist.css"

const BookList = () => {
    let [book,setdata]=useState([])


    useEffect(()=>
    {
        let retreive= async()=>{
            let respose= await fetch("http://localhost:5000/books");
            let datas= await respose.json();
            setdata(datas);

        }
        retreive()
    })
  return ( 
      <div className="bookList">
        {
           book.map(data=>
           ( 
            <div className="fe">
                   
                   <p className="ti">{data.title}</p>


                   <Link to={`/admin/bookList/${data.id}`}>Read Book</Link>
                
            </div>

           ) )
        }
      </div>
   );
}

export default BookList;