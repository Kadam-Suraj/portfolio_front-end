import React from 'react'
import Header from './Container/Header/Header'
import Footer from './Container/Footer/Footer'

const Outlet = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen relative flex flex-col overflow-x-clip'>
            <Header />
            <main className='flex-grow max-w-7xl h-full w-full p-5 mx-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Outlet