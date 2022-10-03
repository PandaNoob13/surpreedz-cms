import React from 'react'
import Datatable from '../Datatable/Datatable'
import useVerificationAccount from './useVerificationAccount'

const VerificationAccountPage = () => {
  const {onGetRequestVirefication,requestVerif,onGetVerifiedAccount,verifiedAccount,onGetUnVerification,unVerifiedAccount} = useVerificationAccount();

  return (
    <div>
      <button  className="btn btn-light m-1 mx-2" onClick={onGetRequestVirefication}>Request Verification Account</button>
      <button  className="btn btn-light m-1 mx-2" onClick={onGetVerifiedAccount}>Verified Account</button>
      <button  className="btn btn-light m-1 mx-2" onClick={onGetUnVerification}>UnVerified Account</button>

      
      <Datatable />
    </div>
  )
}

export default VerificationAccountPage
