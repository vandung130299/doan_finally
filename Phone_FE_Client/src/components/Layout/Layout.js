import React from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import axios from "../../helpers/axios";


/**
* @author
* @function Layout
**/

export const Layout = (props) => {


    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )

}