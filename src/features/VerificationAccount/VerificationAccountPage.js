import React, { useState } from 'react'
import Datatable from '../Datatable/Datatable'
import VerificationPage from '../Verificator/VerificationPage';
import RequestVerification from './state/RequestVerification';
import UnVerifiedAccount from './state/UnVerifiedAccount';
import VerifiedAccount from './state/VerifiedAccount';
import useVerificationAccount from './useVerificationAccount'

const VerificationAccountPage = () => {
  const [table, setTable]= useState('request');
  const [trigger, setTrigger] = useState(false)

  const handleRequestVirefication = async () => {
    setTable('request');
    setTrigger(!trigger);
  } 

  const handleVerified = async () => {
    setTable('verif');
    setTrigger(!trigger);
  } 

  const handleUnverified = async () => {
    setTable('unverif');
    setTrigger(!trigger);
  } 

  return (
    <div>
      <div>
          <button  className="btn btn-outline-dark m-1 mx-2" onClick={handleRequestVirefication}>Request Verification Account</button>
          <button  className="btn btn-outline-dark m-1 mx-2" onClick={handleVerified}>Verified Account</button>
          <button  className="btn btn-outline-dark m-1 mx-2" onClick={handleUnverified}>UnVerified Account</button>
      </div>
      {table === 'request' ? <RequestVerification trigger={trigger} />:<></>}
      {table === 'verif' ? <VerifiedAccount trigger={trigger} />:<></>}
      {table === 'unverif' ? <UnVerifiedAccount trigger={trigger} />:<></>}
    </div>
  )
}

export default VerificationAccountPage
