import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold"></div>
                <ul className="flex gap-10">
                    <li><a href="#" className="hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="hover:text-gray-400">About</a></li>
                    <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
                </nav>
      
    </>
  )
}

export default Navbar
