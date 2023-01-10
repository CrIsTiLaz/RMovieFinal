import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Meta from './Meta'


export const Layout = ({ children }: any) => {
    return (
        <>
            <Meta />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
