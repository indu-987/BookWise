import { Routes,Route } from "react-router-dom";
import AdminHome from "./AdminHome";
import ReadBook from "./ReadBook"
import UserNavbar from "./usernavbar";
import "../styles/userportal.css"
import Bookslist from "./BooksList"

const Userportal = () => {
    return ( 
        <div className="userportal">
            {/* usernavbar */}
            <UserNavbar/>


          <Routes>
          <Route path='/' element={<AdminHome/>}/>
          <Route path='/booklist' element={<Bookslist/>}/>
          <Route path='/booklist/:id' element={<ReadBook/>}/>
          </Routes>
        </div>
     );
}
 
export default Userportal;