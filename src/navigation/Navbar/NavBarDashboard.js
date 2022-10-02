import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
// import logo from "./SurpreedzLogo.png"

const NavBarDashboard = () => {
    // const auth = localStorage.getItem('userCred')
    // const navigate = useNavigate();
    // const handleLogout = () => {
    //     localStorage.clear();
    //     navigate('/sign-in')
    // }
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
                    {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll me-3">
                        <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="" data-bs-target=".navbar-collapse.show" aria-expanded="false">
                                        List Account
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                                    <li> Buyer</li>
                                    <li> Seller</li>
                                    <li> Buyer and Seller</li>
                                </ul>
                        </li>
                        <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="" data-bs-target=".navbar-collapse.show" aria-expanded="false">
                                        List Order
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                                    <li> Waiting Confirmation</li>
                                    <li> On Progress</li>
                                    <li> Submitted</li>
                                </ul>
                        </li>
                        <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="" data-bs-target=".navbar-collapse.show" aria-expanded="false">
                                Account Verification
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                                    <li>Verified</li>
                                    <li>UnVerified</li>
                                    <li>Waiting for verification</li>
                                </ul>
                        </li>
                    </ul>     */}
                    <button  className="btn btn-light m-1 mx-2">Verification Account</button>
                    <button  className="btn btn-light m-1 mx-2">List Account</button>
                    <button  className="btn btn-light m-1 mx-2">List Order Transaction</button>

            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll me-3">
                </ul>
                <ul className="navbar-nav mb-2 mb-lg-0" >
                    <button  className="btn btn-outline-light">Sign Out</button>
                </ul>
            </div>
        </div>
      
    </nav>
  )
}

export default NavBarDashboard
