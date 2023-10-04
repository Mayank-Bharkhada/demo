import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './Navigator/Navbar'
import Footer from './Navigator/Footer'

function Main() {
    return (
        <>
            <Navbar />
            <Outlet/>
            <Footer />
        </>
    )
}

export default Main