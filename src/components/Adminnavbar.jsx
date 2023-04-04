

const AdminNavbar = () => {
    let links = [
        {link : "Dashboard"},
        {link : "Add books"},
        {link : "Add user"},
        {link : "Book-list"},
        {link : "User-list"}
    ]
    return ( 
        <div className="Navbar">
            <ul>
                {
                    links.map ((data) => {
                        return(
                            <li><a href="">{data.link}</a></li>
                        )
                    })
                }
            </ul>
        </div>
     );
}
 
export default AdminNavbar;