"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/user.actions"
import toast from "react-hot-toast"

const SignUpPage = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await createUser({
        username: name,
        email,
        password
      })

      if (res?.success){
        toast.success("Signup successful!")
        router.push("/") 
      }
    } catch (err) {
      toast.error("Signup failed. Try again.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-black p-8 rounded-2xl shadow-md w-11/12 md:w-3/4 lg:w-2/5 border border-white">
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
          <button type="submit" className="w-full bg-white text-black py-2 rounded-lg hover:bg-opacity-80 transition cursor-pointer">
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-white">
          Already have an account? <a href="/sign-in" className="underline">Sign in</a>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
