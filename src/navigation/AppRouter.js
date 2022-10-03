import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SignInView from '../features/SignIn/SignInView';
import NavBarDashboard from './Navbar/NavBarDashboard';
import ProtectedPage from './ProtectedPage';
import ListAccount from '../features/Account/ListAccount';
import ListOrder from '../features/OrderData/ListOrder'
import { useAuth } from '../shared/UseAuth';
import VerificationAccountPage from '../features/VerificationAccount/VerificationAccountPage';

const AppRouter = () => {
  const {token} = useAuth();
  return (
    <>
    {/* {token ? <NavBarDashboard></NavBarDashboard> : <></>} */}
    <NavBarDashboard/>
      <Routes>
            {/* <Route index element={<SignInView />}></Route> */}
            {/* <Route element={<ProtectedPage />}> */}
                <Route path='/verification-account' element={<VerificationAccountPage />}></Route>
                <Route path='/list-account' element={<ListAccount />}></Route>
                <Route path='/list-order-transaction' element={<ListOrder />}></Route>
            {/* </Route> */}
      </Routes>
    </>
  )
}

export default AppRouter
