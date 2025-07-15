import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUsers, FaTasks } from 'react-icons/fa'

function Sidebar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (window.innerWidth >= 768) setOpen(true)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-50 bg-[#0a0a0a] text-white transition-all duration-300 ${
        open ? 'w-72' : 'w-20'
      }`}
    >
      <div className={`p-4 ${open ? 'text-right pr-5' : 'text-center'}`}>
        <button
          onClick={() => setOpen(!open)}
          className="text-white bg-blue-500 px-2 py-1 rounded focus:outline-none focus:ring"
        >
          {open ? 'X' : '≡'}
        </button>
      </div>

      <nav className={`mt-6 space-y-6 ${open ? 'pr-5 text-right' : 'text-center'}`}>
        <Link
          to="/"
          className={`flex items-center gap-3 ${open ? 'justify-end' : 'justify-center'} ${
            location.pathname === '/' ? 'text-blue-400 font-bold' : 'hover:text-blue-400'
          }`}
        >
          <FaHome className="text-xl" />
          {open && <span className="text-base pl-6">Home</span>}
        </Link>

        <Link
          to="/team"
          className={`flex items-center gap-3 ${open ? 'justify-end' : 'justify-center'} ${
            location.pathname === '/team' ? 'text-blue-400 font-bold' : 'hover:text-blue-400'
          }`}
        >
          <FaUsers className="text-xl" />
          {open && <span className="text-base pl-6">Team</span>}
        </Link>

        <Link
          to="/tasks"
          className={`flex items-center gap-3 ${open ? 'justify-end' : 'justify-center'} ${
            location.pathname === '/tasks' ? 'text-blue-400 font-bold' : 'hover:text-blue-400'
          }`}
        >
          <FaTasks className="text-xl" />
          {open && <span className="text-base pl-6">Tasks</span>}
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar











