import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <h id="welcomeHeader"><h1>Welcome to React Router</h1></h>
      <nav id='mainNav'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet/>
    </>
  )
}

export default App
