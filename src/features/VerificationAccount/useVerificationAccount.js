import React, { useState } from 'react'
import { useDeps } from '../../shared/DepContext'

const useVerificationAccount = () => {
    const {verificationAccountService} = useDeps();
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [requestVerif, setRequestVerif] = useState([]);
    const [verifiedAccount, setVerifiedAccount] = useState([]);
    const [unVerifiedAccount, setUnVerifiedAccount] = useState([]);


    const onGetRequestVirefication = async () => {
        setLoading(true);
        console.log('onGetRequestVirefication called');
        try {
            const response = await verificationAccountService.getRequestVerifAccount();
            console.log('onGetRequestVirefication response', response.accounts);
            setRequestVerif(response.accounts)
            setIsError(false);
        } catch (error) {
            setRequestVerif(error)
            console.log('error onGetRequestVirefication', error);
        }finally{
            setLoading(false)
        }
    }

    const onGetVerifiedAccount = async () => {
        setLoading(true);
        console.log('onGetVerifiedAccount called');
        try {
            const response = await verificationAccountService.getVerifiedAccount();
            console.log('onGetVerifiedAccount response', response.accounts);
            setVerifiedAccount(response.accounts)
            setIsError(false);
        } catch (error) {
            setVerifiedAccount(error)
            console.log('error onGetVerifiedAccount',error);
        }finally{
            setLoading(false)
        }
    }

    const onGetUnVerification = async () => {
        setLoading(true);
        console.log('onGetUnVerification called');
        try {
            const response = await verificationAccountService.getUnVerifiedAccount();
            console.log('onGetUnVerification response', response.accounts);
            setUnVerifiedAccount(response.accounts)
            setIsError(false);
        } catch (error) {
            setUnVerifiedAccount(error)
            console.log('error onGetUnVerification',error);
        }finally{
            setLoading(false)
        }
    }

    const onUpdateVerifStatusAccount = async (accountId, statusVerif,requestVerif) => {
        setLoading(true);
        console.log('onUpdateVerifStatusAccount called');
        try {
            console.log('onUpdateVerifStatusAccount try');
            const response = await verificationAccountService.updateVerificationAccount({
                account_id:accountId,
                verified_status:statusVerif,
                verified_request:requestVerif
            });
            console.log('response onUpdateVerifStatusAccount', response);
        } catch (error) {
            console.log('error onUpdateVerifStatusAccount', error);
            setIsError(true)
        }finally{
            setLoading(false)
        }
    }



    return{
        onGetRequestVirefication,requestVerif,onGetVerifiedAccount,verifiedAccount,onGetUnVerification,unVerifiedAccount,onUpdateVerifStatusAccount
    }
 
}

export default useVerificationAccount
