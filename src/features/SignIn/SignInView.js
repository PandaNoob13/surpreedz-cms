import { useEffect, useState } from "react";
import useSignIn from "./useSignIn";


const SignInView = () => {
    const {onPostSignIn} = useSignIn();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailErrorMessage, setEmailErrorMessage] = useState('')
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)

    const handleEmailChange = async (event) => {
        setEmail(event.target.value)
    }

    const validateEmailInput = async () => {
        let emailErrorMessage = ''
        if (!email.match(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/)){
            if (email === 0 || email === '') {
                emailErrorMessage = `Email can't be empty!`
            } else {
                emailErrorMessage = 'Invalid email format'
            }
        }
        setEmailErrorMessage(emailErrorMessage)
    }

    useEffect(() => {
        validateEmailInput()
    }, [email])

    const handlePasswordChange = async (event) => {
        setPassword(event.target.value)
    }

    const validatePasswordInput = async () => {
        let minPasswordLength = 6
        let passwordErrorMessage = ''
        if (password.length < minPasswordLength){
            passwordErrorMessage = `${minPasswordLength} min length character`
        }
        setPasswordErrorMessage(passwordErrorMessage)
    }
    useEffect(()=>{
        validatePasswordInput()
    }, [password])

    const handleSubmit = async (event) => {
        event.preventDefault(); // Supaya ga render ulang
        onPostSignIn(email, password)
    }

    useEffect(() => {
        checkInputState()
    }, [emailErrorMessage])

   
    useEffect(() => {
        checkInputState()
    }, [passwordErrorMessage])
    const checkInputState = async () => {
        if (emailErrorMessage === '' && passwordErrorMessage === ''){
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }
  return (
    <div className="bg-request-page">
          <div className="container d-flex flex-column min-vh-100 py-auto">
                  <div className="row my-auto">
                      
                  <div  className="col-lg-4 card bg-card align-self-center align-items-center">
                      <form onSubmit={handleSubmit} className="col-md-10 d-flex pt-5 flex-column justify-content-center align-items-center text-center ">
                          <input className="form-control p-3 m-2"
                          placeholder="Username/email"
                          type="email"
                          name="email"
                          id="email"
                          onChange={handleEmailChange}
                          />
                          <input className="form-control p-3 m-2" placeholder="Password"
                          type="password"
                          name="password"
                          id="password"
                          onChange={handlePasswordChange} />
                          <button
                          type="submit"
                          name="submit" 
                          id="submit"  
                          className="col-md-10 btn btn-light m-4"
                          disabled={buttonDisabled}
                          >Sign In</button>
                          
                          
                          
                      </form> 

                  </div>
              </div>
          </div>
    </div>
  )
}

export default SignInView
