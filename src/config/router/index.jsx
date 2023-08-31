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
import Profile from '../../pages/Profile.jsx'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
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
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router