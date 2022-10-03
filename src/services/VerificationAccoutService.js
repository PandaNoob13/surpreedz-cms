const VerificationAccoutService = ({doGet,doPut}) => {
    const getRequestVerifAccount = async () => {
        // console.log("Try Getting Service Cards");
        try {
            return await doGet({url: `/cms/account-req-verified`})
        } catch (error) {
            throw error
        }
    }

    const getVerifiedAccount = async () => {
        // console.log("Try Getting Service Cards");
        try {
            return await doGet({url: `/cms/account-verified`})
        } catch (error) {
            throw error
        }
    }

    const getUnVerifiedAccount = async () => {
        // console.log("Try Getting Service Cards");
        try {
            return await doGet({url: `/cms/account-unverified`})
        } catch (error) {
            throw error
        }
    }

    const updateVerificationAccount = async (data) => {
        console.log("updateVerificationAccount Service Put");
        try {
            console.log('Data before sent : ', data);
            return await doPut({url: '/account/edit-verified', data: data})
        } catch (error) {
            console.log('Error', error);
            window.sessionStorage.clear()
            window.localStorage.clear()
            throw error
        }
    }

    return {
        getRequestVerifAccount, getUnVerifiedAccount, getVerifiedAccount,updateVerificationAccount
    }
  
}

export default VerificationAccoutService
