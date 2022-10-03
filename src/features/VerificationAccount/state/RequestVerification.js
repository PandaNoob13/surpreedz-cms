import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import useVerificationAccount from '../useVerificationAccount'
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const RequestVerification = () => {
    const {onGetRequestVirefication,requestVerif,onUpdateVerifStatusAccount} = useVerificationAccount();
    const navigate = useNavigate();
    const [trigger,setTrigger] = useState(false)

    useEffect(() =>{

      onGetRequestVirefication();
      console.log('RequestVerification => ', requestVerif);
    },[trigger])

    const handleAction = async (id,verifStatus,verifRequest) => {
      try {
          await onUpdateVerifStatusAccount(id,verifStatus,verifRequest)
          setTrigger(!trigger);

          if (verifStatus) {
            swal({
                title:'Update Verification Account Success',
                text:'Check the list of verified accounts!',
                icon:'success',
                buttons:["No", "Yes"]
            }).then((value)=> {
                if (value) {
                    navigate('/list-verified-account')
                }
            })
            }else if(verifStatus === false){
                swal({
                    title:'Update Verification Account Success',
                    text:'Check the list of unverified accounts !',
                    icon:'success',
                    buttons:["No", "Yes"]
                }).then((value)=> {
                    if (value) {
                        navigate('/list-unverified-account')
                    }  
                })
         }
          
      } catch (error) {
          console.log('error', error);
      }
  }


    
  return (
    <div className='text-white min-vh-100' style={{backgroundColor: "#212121", paddingTop: "3.5rem"}}>
       
    <div className="container p-3">
        <div className="col-md-12 text-white " style={{paddingTop: "1.5rem"}}>
            <h3>Verification Request List</h3>
            <p>Manage your verification requested service</p>
        </div>
        <div className="col-md-12">
            
            <br/>
        </div>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Account Name</th>
                    <th scope="col">Picture URL</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                { requestVerif? 
                    requestVerif.map((dt, index) => {
                        return (
                            <tr key={dt.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{dt.AccountDetail.name}</td>
                                <td>{dt.AccountDetail.PhotoProfiles[0].photo_link}</td>
                                <td style={{textAlign: "center"}}>
                                    <div className="d-flex justify-content-center gap-3">
                                        <Button size="sm" variant="success" onClick={() => handleAction(dt.id,true,'accepted')}>
                                            <FontAwesomeIcon icon={faCheck}/>
                                            <span className="p-2">Accept</span>
                                        </Button>
                                        <Button size="sm" variant="danger" onClick={() => handleAction(dt.id,false,'rejected')}>
                                            <FontAwesomeIcon icon={faXmark}/>
                                            <span className="p-2">Reject</span>
                                        </Button>
                                    </div>
                                </td>
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

export default RequestVerification
