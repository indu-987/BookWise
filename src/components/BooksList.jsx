import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/booklist.css"

const BookList = () => {
  let [book, setdata] = useState([]);

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
  return (
    <div className="bookList">
      {book.map((data) => (
        <div className="fe">

          <img src={data.imageLink} width={150} />
          <p className="ti">{data.title}</p>
          <p>Author:{data.author}</p>
          <Link to={`/admin/bookList/${data.id}`}>Read Book</Link><br />
          <button onClick={() => deleted(data.id, data.title)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
