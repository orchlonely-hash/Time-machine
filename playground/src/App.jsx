import './App.css'
import React from "react";
import Layout from './components/Layout/Layout'
import Main from './page/Main'
import Library from './page/Library'
import Complain from './page/Complain'
import Login from './page/Login'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Main />} />
          <Route path='library' element={<Library />} />
          <Route path='login' element={<Login />} />
            <Route path='complain' element={<Complain />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
