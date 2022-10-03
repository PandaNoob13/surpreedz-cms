import SignInService from "./SignInService"
import VerificationAccoutService from "./VerificationAccoutService"

const ServiceFactory = (apiClient) => {
    return {
      signInService : SignInService(apiClient),
      verificationAccountService : VerificationAccoutService(apiClient)
    }
  }
  
  export default ServiceFactory