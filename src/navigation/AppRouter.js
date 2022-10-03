import React from 'react'
import { Route, Routes } from 'react-router-dom';
import SignInView from '../features/SignIn/SignInView';
import NavBarDashboard from './Navbar/NavBarDashboard';
import ProtectedPage from './ProtectedPage';
import ListAccount from '../features/Account/ListAccount'
import VerificationPage from '../features/Verificator/VerificationPage';
import ListOrder from '../features/OrderData/ListOrder'
import { useAuth } from '../shared/UseAuth';

const AppRouter = () => {
  const {token} = useAuth();
  return (
    <>
    {token ? <NavBarDashboard /> : <></>}
      <Routes>
            <Route index element={SignInView}></Route>
            <Route element={ProtectedPage}>
                <Route path='/verification-account' element={VerificationPage}></Route>
                <Route path='/list-account' element={ListAccount}></Route>
                <Route path='/list-order-transaction' element={ListOrder}></Route>
            </Route>
      </Routes>
    </>
  )
}

export default AppRouter
