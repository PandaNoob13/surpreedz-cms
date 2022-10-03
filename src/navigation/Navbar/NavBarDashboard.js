import { NavLink } from "react-router-dom";
import { useAuth } from "../../shared/UseAuth";
import "./navbar.css";
import logo from "./SurpreedzLogo.png"

const NavBarDashboard = () => {
    const {onLogout} = useAuth();

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
        <div className="container px-0">
            <div className="navbar-brand pt-0 ms-3">
                <NavLink reloadDocument to='/' className="nav-link" aria-current="page"><img src={logo} alt='surpreedz' height={'24'}></img></NavLink>           
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse px-3" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll me-3">
                    <li className="nav-item">
                        <NavLink to='/verification-account' className="nav-link" aria-current="page">Account Verification</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/list-account' className="nav-link" aria-current="page">Accounts</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='/list-order-transaction' className="nav-link" aria-current="page">Order Transaction</NavLink>
                    </li>
                </ul>
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
