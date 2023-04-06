import { Route,Routes } from 'react-router-dom';
import AdminHome from './AdminHome';
import AdminNavbar from './Adminnavbar';
import Addbook from './Addbook';
import Adduser from './Adduser';
import BookList from './BooksList';
import UserList from './userList';
import ReadBook from './ReadBook';
import '../styles/adminPortal.css'

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            
                <AdminNavbar/>
           
            
                <Routes>
                    <Route path='/admin/' element={<AdminHome/>}/>
                    <Route path='/addUser/' element={<Adduser/>}/>
                    <Route path='/addBook/' element={<Addbook/>}/>
                    <Route path='/bookList/' element={<BookList/>}/>
                    <Route path='/userlist/' element={<UserList/>}/>
                    <Route path='/bookList/:id'  element={<ReadBook/>} />
                </Routes>
            </div>
      
     );
}

export default AdminPortal;