
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { role, logout } = useAuth()
  return (
    <div className="flex justify-between bg-gray-800 text-white p-3">
      <span>Library System</span>
      <div>
        <span className="mr-4">{role}</span>
        <button onClick={logout} className="bg-red-500 px-3 py-1">Logout</button>
      </div>
    </div>
  )
}
export default Navbar
