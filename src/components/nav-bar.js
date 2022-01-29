import {Link,useHistory} from 'react-router-dom'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js"
const NavBar = ()=>{
    const { push } = useHistory();

    return <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand active" to="/">UsersHub</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link  className="nav-link active" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => push('/register')}>Register</button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
       </>
}
export default NavBar;

