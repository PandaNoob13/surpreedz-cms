import React from 'react'
import { NavLink } from 'react-router-dom'
import Datatable from '../Datatable/Datatable'

const VerificationAccountPage = () => {
    return (
        <div className='text-white min-vh-100' style={{backgroundColor: "#212121", paddingTop: "3.5rem"}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className="col-md-12 text-white " style={{paddingTop: "1.5rem"}}>
                            <h3>Verification Request List</h3>
                            <p>Manage your verification requested service</p>
                        </div>
                    </div>
                    <div className='col-md-4' style={{paddingTop: "1.5rem"}}>
                        <div className='d-flex gap-2 justify-content-center'>
                            <NavLink reloadDocument to='/' className="nav-link" aria-current="page">
                                <button className="btn btn-warning mt-3">Pending</button>
                            </NavLink>
                            <NavLink reloadDocument to='/' className="nav-link" aria-current="page">
                                <button className="btn btn-success mt-3">Verified</button>
                            </NavLink>
                            <NavLink reloadDocument to='/' className="nav-link" aria-current="page">
                                <button className="btn btn-danger mt-3">Declined</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    {/* <div className="hr"></div> */}
                    <br/>
                </div>
            </div>
            
            <Datatable />
        </div>
    )
}

export default VerificationAccountPage
