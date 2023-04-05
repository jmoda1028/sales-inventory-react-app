import React, { Suspense } from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
import PrivateRoutes from './util/PrivateRoutes';
import CashierRoute from './util/CashierRoute';
import AdminRoute from './util/AdminRoute';
import './assets/css/Custom.css';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Customer = React.lazy(() => import('./views/Customer'));
const EditCustomer = React.lazy(() => import('./views/Customer/EditCustomer'));
const Employee = React.lazy(() => import('./views/Employee'));
const Inventory = React.lazy(() => import('./views/Inventory'));
const EditInventory = React.lazy(() => import('./views/Inventory/EditInventory'));
const InventoryDetail = React.lazy(() => import('./views/Inventory/InventoryDetail'));
const Pos = React.lazy(() => import('./views/Pos'));
const Supplier = React.lazy(() => import('./views/Supplier'));
const EditSupplier = React.lazy(() => import('./views/Supplier/EditSupplier'));
const Transaction = React.lazy(() => import('./views/Transaction'));
const TransactionItems = React.lazy(() => import('./views/Transaction/TransactionItems'));
const Login = React.lazy(() => import('./authentication/Login'));
const Profile = React.lazy(() => import('./authentication/Profile'));
const ForgotPassword = React.lazy(() => import('./authentication/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./authentication/ResetPassword'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


function App() {
    const location = useLocation();

    return (
        <Suspense
          fallback={
            <div className='loading__spinner'>
              <LoadingSpinner />
            </div>
          }
          >
          <Layout>
            <Routes>
              <Route path='/login' element={<Login />}/>
              <Route element={<AdminRoute />}>
                <Route path='/' exact element={<Navigate to="/dashboard" state={{ from: location}} replace/>} />
                <Route element={<Dashboard />} path='/dashboard' exact/>
                <Route element={<Employee />} path='/employee' exact/>
                <Route path='/customer'  exact element={<Customer />}/>
                <Route element={<EditCustomer />} path='/customer/:id'/>
                <Route path='/supplier' exact element={<Supplier />}/>
                <Route path='/supplier/:id' element={<EditSupplier />}/>
                <Route path='/inventory' exact element={<Inventory />}/>
                <Route path='/transaction' element={<Transaction />}/>
                <Route path='/transaction/:id' element={<TransactionItems />}/>
                <Route path='/inventory/edit/:id' exact element={<EditInventory />}/>
                <Route path='/inventory/detail/:id' exact element={<InventoryDetail />}/>
              </Route>
              <Route element={<CashierRoute />}>
                <Route path='/pos' element={<Pos />}/>
              </Route>
              <Route element={<PrivateRoutes />}> 
                <Route element={<Profile />} path='/profile' exact/>
              </Route> 
              <Route path='/forgot-password' element={<ForgotPassword />}/>
              <Route path='/reset-password/:token' element={<ResetPassword />}/>
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </Layout>
        </Suspense>
    );
}

export default App;