import { Navigate, Outlet } from "react-router-dom";

const ProtectedPage = () => {
  const auth = localStorage.getItem('userCred')
  return auth ? <Outlet/> : <Navigate to='/sign-in' replace/>
}

export default ProtectedPage;