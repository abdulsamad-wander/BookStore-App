import React from 'react'
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch }) => {
  return (
    <>
    <Navbar search={search} setSearch={setSearch}/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
