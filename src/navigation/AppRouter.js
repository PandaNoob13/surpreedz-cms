import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SignInView from '../features/SignIn/SignInView';
import NavBarDashboard from './Navbar/NavBarDashboard';
import ProtectedPage from './ProtectedPage';
import ListAccount from '../features/Account/ListAccount';
import ListOrder from '../features/OrderData/ListOrder'
import { useAuth } from '../shared/UseAuth';
import VerificationAccountPage from '../features/VerificationAccount/VerificationAccountPage';
import RequestVerification from '../features/VerificationAccount/state/RequestVerification';
import VerifiedAccount from '../features/VerificationAccount/state/VerifiedAccount';
import UnVerifiedAccount from '../features/VerificationAccount/state/UnVerifiedAccount';

const AppRouter = () => {
  const {token} = useAuth();
  return (
    <>
    {token ? <NavBarDashboard></NavBarDashboard> : <></>}
      <Routes>
            <Route index element={<SignInView />}></Route>
            <Route element={<ProtectedPage />}>
                <Route path='/request-verification' element={<RequestVerification />}></Route>
                <Route path='/list-verified-account' element={<VerifiedAccount />}></Route>
                <Route path='/list-unverified-account' element={<UnVerifiedAccount />}></Route>
            </Route>
      </Routes>
    </>
  )
}

export default AppRouter
