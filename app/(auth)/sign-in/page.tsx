"use client"

import { useState } from "react"

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded-2xl shadow-md w-full lg:w-2/5 border border-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
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
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-white">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="rounded border-white bg-black text-white"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-white hover:underline">Forgot password?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-lg hover:bg-opacity-80 transition"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-white">
          <span>Don&apos;t have an account?</span> <a href="sign-up" className="text-white underline">Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
