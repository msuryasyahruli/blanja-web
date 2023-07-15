import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from "../../pages/Home.jsx"
import Index from '../../pages/index.jsx'
import Login from '../../pages/auth/Login.jsx'
import Register from '../../pages/auth/Register.jsx'
import Page404 from '../../pages/Page404.jsx'
import ForgotPw from '../../pages/auth/ForgotPw.jsx'
import ResetPw from '../../pages/auth/ResetPw.jsx'
import Detail from '../../pages/Detail.jsx'
import Checkout from '../../pages/Checkout.jsx'
import Order from '../../pages/Order.jsx'
import CRUD from '../../test/table.jsx'
import TestDetail from '../../test/testDetail.jsx'
import Profile from '../../pages/Profile.jsx'
import Testbtn from '../../test/testbtn.jsx'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <ul style={{ display: 'flex', justifyContent: 'space-between', margin: 10 }}>
          <li><Link to="/index">Index</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/forgot">Forgot</Link></li>
          <li><Link to="/reset">Reset</Link></li>
          <li><Link to="/detail">Detail</Link></li>
          <li><Link to="/order">Order</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul> */}
        <Routes>
          <Route path='/' element={<Navigate to="/home" replace="true"></Navigate>} />
          <Route path='/index' element={<Index />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<ForgotPw />} />
          <Route path='/reset' element={<ResetPw />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order' element={<Order />} />
          <Route path='/test' element={<CRUD />} />
          <Route path='/test/:id' element={<TestDetail />} />
          <Route path='/testbtn' element={<Testbtn />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router