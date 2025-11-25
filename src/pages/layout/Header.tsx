import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-semibold">
          Job Tracker
        </NavLink>
        <nav className="flex items-center gap-4 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-2 py-1 rounded ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-2 py-1 rounded ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-gray-900'}`
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
