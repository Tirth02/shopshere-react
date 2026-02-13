import React from 'react'

const Footer = () => {
  return (
     <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SHOPSHERE. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer