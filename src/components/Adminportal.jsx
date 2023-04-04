import { Route,Routes } from 'react-router-dom';
import AdminHome from './AdminHome';
import BookList from './BooksList';
import AdminNavbar from './Adminnavbar';


const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminHome/>}/>
                <Route path='/book-list' element={<BookList/>}/>
            </Routes>
        </div>
     );
}

export default AdminPortal;