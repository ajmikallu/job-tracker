import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
