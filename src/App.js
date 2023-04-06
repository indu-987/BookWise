import {BrowserRouter,Routes,Route} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AdminLogin from "./components/AdminLog";
import UserLogin from "./components/UserLog";
import AdminPortal from "./components/Adminportal";
import BookList from "./components/BooksList";

const App = () => {
  return ( 
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/adminLogin" element={<AdminLogin/>} />
            <Route path="/userLogin" element={<UserLogin/>} />
            <Route path="/admin/*" element={<AdminPortal/>} />
            <Route path="/bookList" element={<BookList/>}/>
          </Routes>
       </BrowserRouter>
    </div>
   );
}
 
export default App;