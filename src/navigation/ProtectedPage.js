import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../shared/UseAuth";

const ProtectedPage = () => {
  const {token} = useAuth();
  return token ? <Outlet/> : <Navigate to='/' replace/>
}

export default ProtectedPage;