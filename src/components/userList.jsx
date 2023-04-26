import "../styles/userlist.css"

import { useState, useEffect } from "react";
import "../styles/userlist.css";

const UserList = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let reponse = await fetch("http://localhost:5000/users");
      let data = await reponse.json();
      setUsers(data);
    };
    fetchData();
  });

  //delete a book from server
  let handleDelete = (id, name) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    });
    alert(`${name} will be deleted permanently`);
  };
  return (
    <div className="userList">
      <h1>User List</h1><hr />
      <div className="usersgroup">
        {users.map((data) => (
          <div className="user">
            <div className="userdata">
            <h3>Id: {data.id}</h3>
              <h3>Name: {data.name}</h3>
              <h3>Email: {data.email}</h3>
              <h3>Contact: {data.phoneNumber}</h3>
              <div>
                <button className="deletebtn" onClick={() => handleDelete(data.id, data.name)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
