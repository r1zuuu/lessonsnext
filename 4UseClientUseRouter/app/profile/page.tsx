'use client'

import { useEffect, useState } from 'react'
import { Post } from '../types/index'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const fetchPosts =  async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/posts')
      if (!res.ok) {
        throw new Error('Nie udalo sie pobrac postow')
      }
      const data = await res.json()
      setPosts(data)
    }
    catch (err: any) {
      setError(err.message)
    }
    finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchPosts()
  }, [])

  if (loading) return <div>⏳ Ładowanie postów...</div>
  if (error) return <div>❌ Błąd: {error}</div>

  return (
    <div className="p-4">
      <button onClick={() => router.push('/')} className='mb-4 border-4 border-white p-2 rounded-md hover:scale-110 transition-transform hover:bg-blue-100 hover:text-black'>Strona glowna</button>
            <button onClick={fetchPosts} className='mb-4 border-4 border-white p-2 rounded-md hover:scale-110 transition-transform hover:bg-blue-100 hover:text-black'>Refetch</button>
      <h1 className="text-2xl font-bold mb-4">Twoje posty (profil)</h1>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id} className="border p-2 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}