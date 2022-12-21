import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

const BaseLayout = (props) => {
    return (
        <>
            <Navbar/> 
                {props.children}
            <Footer/>
        </>
    )
}

export default BaseLayout
