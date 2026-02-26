
import { useEffect, useState } from 'react'
import api from '../services/api'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'

interface Book {
  id: string
  title: string
  author: string
  publishedYear: number
  status: string
}

function Books() {
  const { role } = useAuth()
  const [books, setBooks] = useState<Book[]>([])
  const [form, setForm] = useState({ title:'', author:'', publishedYear:0 })

  const load = () => {
    api.get('/books').then(res => setBooks(res.data))
  }

  useEffect(() => { load() }, [])

  const addBook = async () => {
    await api.post('/books', form)
    load()
  }

  const deleteBook = async (id: string) => {
    await api.delete(`/books/${id}`)
    load()
  }

  const toggleStatus = async (id: string, status: string) => {
    const newStatus = status === 'available' ? 'borrowed' : 'available'
    await api.patch(`/books/${id}/status?status=${newStatus}`)
    load()
  }

  return (
    <div>
      <Navbar />
      <div className="p-6">
        {role === 'ROLE_ADMIN' && (
          <div className="mb-4">
            <input placeholder="Title" className="border p-2 mr-2"
              onChange={e => setForm({...form, title:e.target.value})} />
            <input placeholder="Author" className="border p-2 mr-2"
              onChange={e => setForm({...form, author:e.target.value})} />
            <input type="number" placeholder="Year" className="border p-2 mr-2"
              onChange={e => setForm({...form, publishedYear:Number(e.target.value)})} />
            <button onClick={addBook}
              className="bg-green-500 text-white px-3 py-1">Add</button>
          </div>
        )}

        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Title</th>
              <th className="p-2">Author</th>
              <th className="p-2">Year</th>
              <th className="p-2">Status</th>
              {role === 'ROLE_ADMIN' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {books.map(b => (
              <tr key={b.id} className="border-t">
                <td className="p-2">{b.title}</td>
                <td className="p-2">{b.author}</td>
                <td className="p-2">{b.publishedYear}</td>
                <td className="p-2">{b.status}</td>
                {role === 'ROLE_ADMIN' && (
                  <td className="p-2">
                    <button onClick={() => deleteBook(b.id)}
                      className="bg-red-400 text-white px-2 mr-2">Delete</button>
                    <button onClick={() => toggleStatus(b.id, b.status)}
                      className="bg-blue-400 text-white px-2">Toggle</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Books
