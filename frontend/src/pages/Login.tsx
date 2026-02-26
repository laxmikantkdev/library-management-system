
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const submit = async (e: any) => {
    e.preventDefault()
    const res = await api.post('/auth/login', { username, password })
    login(res.data.token)
    navigate('/books')
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={submit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-xl mb-4 text-center">Login</h2>
        <input className="border p-2 w-full mb-2"
          placeholder="Username"
          onChange={e => setUsername(e.target.value)} />
        <input type="password"
          className="border p-2 w-full mb-4"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white w-full py-2">Login</button>
      </form>
    </div>
  )
}
export default Login
