import React from "react";
import { Route, Routes } from "react-router-dom"
import Login from "./components/login.jsx"
import Signup from './components/signup.jsx'

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/users/signup" element={<Signup />}/>
    </Routes>
  ) 
}