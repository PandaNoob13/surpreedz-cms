
import { useEffect } from "react";
import useVerificationAccount from '../useVerificationAccount'

const UnVerifiedAccount = () => {
    const {onGetUnVerification,unVerifiedAccount} = useVerificationAccount();

    useEffect(()=>{
        onGetUnVerification();
    },[])

    
  return (
    <div className='text-white min-vh-100' style={{backgroundColor: "#212121", paddingTop: "3.5rem"}}>
       
    <div className="container p-3">
        <div className="col-md-12 text-white " style={{paddingTop: "1.5rem"}}>
            <h3>Unverified Account List</h3>
            {/* <p>Manage your verification requested service</p> */}
        </div>
        <div className="col-md-12">
            
            <br/>
        </div>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Account Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Verified Request</th>
                    
                </tr>
            </thead>
            <tbody>
                { unVerifiedAccount? 
                    unVerifiedAccount.map((dt, index) => {
                        return (
                            <tr key={dt.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{dt.AccountDetail.name}</td>
                                <td>{dt.AccountDetail.location}</td>
                                <td>{dt.AccountDetail.verified_request}</td>
                            </tr>
                        )
                    }) : <></>
                }
            </tbody>
        </table>
    </div>
</div>
  )
}

export default UnVerifiedAccount
