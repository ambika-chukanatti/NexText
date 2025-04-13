"use client"

import { useState } from "react"

const SignUpPage: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Add sign-up logic and validation
    console.log({ name, email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded-2xl shadow-md w-full lg:w-2/5 border border-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-white bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-white bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-2 border border-white bg-black text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg hover:bg-opacity-80 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-white">
          Already have an account? <a href="sign-in" className="text-white underline">Sign in</a>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
