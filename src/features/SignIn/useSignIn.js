import { useEffect, useState } from "react";
import { useDeps } from "../../shared/DepContext";
import { useAuth } from "../../shared/UseAuth";


const useSignIn = () => {
    const {onLogin} = useAuth();
    const {signInService} = useDeps();
    const [isLoading, setLoading] = useState(false);

    const [posts, setPosts] = useState({})

    const onPostSignIn = async (username,password) => {
        console.log("On Post Sign In Called");
        setLoading(true);
        console.log(username);
        console.log(password);
        try {
            const response = await signInService.postLogin({
                email: username,
                password: password
            })
            console.log('response token', response.token);

            setPosts(response.token)
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        onLogin(posts)
    },[posts])

  return {
    onPostSignIn
  }
}

export default useSignIn;
