// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'

const posts = [
  { id: 1, title: 'Exploring Lemurs', content: 'Lemurs are fascinating creatures native to Madagascar.' },
  { id: 2, title: 'The Beauty of Madagascar', content: 'Madagascar is home to many unique species.' },
  { id: 3, title: 'Conservation Efforts', content: 'Protecting lemurs and their habitat is vital for biodiversity.' },
]

export default function Home() {
  const [postList, setPostList] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPostList(posts) // 실제로 API를 호출하지 않고, 가상의 포스트를 사용
      } catch (err) {
        setError('Failed to load posts.')
      }
      setLoading(false)
    }

    fetchPosts()
  }, [])

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-lg">
        <h1 className="text-3xl font-bold">Lemur Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About</a></li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-8">
        <h2 className="text-2xl font-bold">Welcome to the Lemur Blog</h2>
        <p className="text-gray-400">Here you'll find interesting facts and stories about lemurs!</p>

        {/* 포스트 리스트 */}
        {loading && <p>Loading posts...</p>}
        {error && <p>{error}</p>}
        <div className="space-y-6">
          {postList.map((post: any) => (
            <div key={post.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-white">{post.title}</h3>
              <p className="text-gray-300">{post.content}</p>
            </div>
          ))}
        </div>
      </main>

      {/* About Section */}
      <section className="min-h-screen bg-gray-800 text-white p-6">
        <h2 className="text-3xl font-bold">About Lemurs</h2>
        <p className="text-gray-400 mt-4">
          Lemurs are primates found only on the island of Madagascar. They are famous for their large, expressive eyes
          and their ability to leap great distances.
        </p>
      </section>

      {/* Contact Form */}
      <section className="min-h-screen bg-gray-900 text-white p-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-400 mt-4">Feel free to reach out if you have any questions or comments.</p>
        <form className="mt-8 space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-300">Your Name</label>
            <input
              id="name"
              type="text"
              className="w-full p-2 bg-gray-700 text-white rounded-md"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300">Your Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 bg-gray-700 text-white rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-500 text-black rounded-md hover:bg-yellow-400"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-gray-500 p-4 text-center">
        <p>&copy; 2025 Lemur Explorer. All rights reserved.</p>
      </footer>
    </div>
  )
}
