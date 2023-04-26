import { Route,Routes } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminNavbar from './Adminnavbar';
import Addbook from './Addbook';
import Adduser from './Adduser';
import BookList from './BooksList';
import ReadBook from './ReadBook';
import '../styles/adminPortal.css';
import UserList from "./UserList"


const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            
                <AdminNavbar/>
           
            
                <Routes>
                    <Route path='/' element={<AdminHome/>}/>
                    <Route path='/addUser/' element={<Adduser/>}/>
                    <Route path='/addBook/' element={<Addbook/>}/>
                    <Route path='/bookList/' element={<BookList/>}/>
                    <Route path='/UserList/' element={<UserList/>}/>
                   <Route path='/bookList/:id'  element={<ReadBook/>}/>
                </Routes>
            </div>
      
     );
}

export default AdminPortal;