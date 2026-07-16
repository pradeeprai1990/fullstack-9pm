import React from 'react'
import { Link } from 'react-router'

export default function Login() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left brand / illustration panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-amber-800 via-amber-700 to-stone-900">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_45%)]" />
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center text-2xl">
              🪑
            </div>
            <span className="text-xl font-semibold tracking-tight">Furnish Admin</span>
          </div>

          <div className="max-w-md">
            <h1 className="text-4xl font-bold leading-tight">
              Manage your furniture store with ease.
            </h1>
            <p className="mt-4 text-amber-100/80 text-lg">
              Track inventory, orders and customers all from one beautiful dashboard.
            </p>
          </div>

          <p className="text-sm text-amber-100/60">
            © {new Date().getFullYear()} Furnish. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex w-full lg:w-1/2 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="h-10 w-10 rounded-xl bg-amber-700 flex items-center justify-center text-xl text-white">
              🪑
            </div>
            <span className="text-lg font-semibold text-gray-900">Furnish Admin</span>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="mt-1 text-sm text-gray-500">
              Please sign in to your admin account.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="admin@furnish.com"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-amber-700 hover:text-amber-800">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm outline-none transition focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
              />
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-amber-700 focus:ring-amber-600/30"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                Remember me for 30 days
              </label>
            </div>

            <Link to={'/dashboard'}>
                <button
                type="button"
                className="w-full rounded-lg bg-amber-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-600/40 focus:ring-offset-2"
                >
                Sign in
                </button>
            </Link>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-amber-700 hover:text-amber-800">
              Contact administrator
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
