import React from 'react'

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-semibold text-gray-900">ShopEase</div>

        <nav className="flex space-x-6">
          <a href="#" className="font-medium text-gray-700 transition hover:text-blue-600">
            Home
          </a>
          <a href="#" className="font-medium text-gray-700 transition hover:text-blue-600">
            Product
          </a>
          <a href="#" className="font-medium text-gray-700 transition hover:text-blue-600">
            Cart
          </a>
        </nav>
      </div>
    </header>
  )
}
