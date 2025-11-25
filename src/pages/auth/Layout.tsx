import React from 'react'
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <main className='auth-layout'>
            <section>
                <img className='auth-logo h-8 w-auto' width={140} height={32} src="/assets/images/logo.png" alt="logo" />
                <Outlet />
            </section>
            <section className='auth-right-section'>
                <div className='auth-right-section-content'>
                    <h2 className='text-2xl font-semibold'>Welcome to Job Tracker</h2>
                    <p className='text-gray-400'>Explore your job applications, interviews, and offers.</p>
                </div>
                <div className='flex-1 relative'>
                    <img className='auth-dashboard-preview ' src="/assets/images/auth-right-section-image.png" alt="auth-right-section-image" />
                    <img className='auth-dashboard-preview' src="/assets/images/auth-right-section-image-2.png" alt="auth-right-section-image" />
                </div>
            </section>
        </main>
    )
}
export default Layout
