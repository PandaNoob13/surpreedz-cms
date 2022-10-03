import { NavLink } from "react-router-dom";
import { useAuth } from "../../shared/UseAuth";
import "./navbar.css";
// import logo from "./SurpreedzLogo.png"

const NavBarDashboard = () => {
    const {onLogout} = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
            <div className="navbar-brand pt-0 ms-3">
                {/* <img src={logo} alt='surpreedz' height={'24'}></img> */}
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                   <NavLink to='/request-verification'>
                        <button  className="btn btn-light m-1 mx-2">Request Verification</button>
                   </NavLink>
                   <NavLink to='/list-verified-account'>
                        <button  className="btn btn-light m-1 mx-2">Verified Account</button>
                   </NavLink>
                   <NavLink to='/list-unverified-account'>
                        <button  className="btn btn-light m-1 mx-2">Unverified Account</button>
                   </NavLink>

            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll me-3">
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0" >
                    <button  className="btn btn-outline-light" onClick={onLogout}>Sign Out</button>
                </ul>
            </div>
        </div>
      
    </nav>
  )
}

export default NavBarDashboard
