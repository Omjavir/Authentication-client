import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/quote" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App