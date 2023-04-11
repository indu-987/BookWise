import { useState, useEffect } from "react";
import "../styles/booklist.css"
import { useLocation,useNavigate } from "react-router-dom";

const BookList = () => {
  let [book, setdata] = useState([]);
 let navigate=useNavigate()
  let location = useLocation()

  useEffect(() => {
    let retreive = async () => {
      let respose = await fetch("http://localhost:5000/books");
      let datas = await respose.json();
      setdata(datas);
    };
    retreive();
  });

  let deleted = (id, title) => {
    fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    });
    alert(`${title} deleted`);
  };

   let readbook = (id)=>{
    if (location.pathname =='/admin/bookList/') 
    {
      navigate(`/admin/bookList/${id}`)
    } else 
    {
      navigate(`/user/bookList/${id}`)

    }
   }

  return (
    <div className="bookList">
      {book.map((data) => (
        <div className="fe">

          <img src={data.imageLink} width={150} />
          <p className="ti">{data.title}</p>
          <p>Author:{data.author}</p>
          <button className="btm1" onClick={()=>readbook(data.id)} >Read Book</button><br />
          {location.pathname == '/admin/bookList/'  &&  <button className="btm3" onClick={() => deleted(data.id, data.title)}>delete</button>}
        </div>
      ))}
    </div>
  );
};

export default BookList;
