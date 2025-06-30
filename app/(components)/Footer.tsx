import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-[#f8f9fb] text-gray-600 px-8 py-16 relative">
  {/* Background logo (light opacity for "nock" word effect) */}
  <div className="absolute inset-0 bg-[url('/your-nock-bg-image.svg')] bg-no-repeat bg-center bg-contain opacity-5 pointer-events-none"></div>

  <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-12">
    {/* Left Section */}
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-gray-800">nock</h1>
      <p className="text-sm">There is no risk-free trading</p>
      <div className="mt-4 inline-flex items-center gap-2 bg-white shadow-md rounded-full px-3 py-1 border text-sm">
        <span className="h-2 w-2 bg-green-500 rounded-full"></span>
        All systems operational
      </div>
    </div>

    {/* Center Section - Navigation Links */}
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
      <ul className="space-y-2">
        <li><a href="#">About</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
      <ul className="space-y-2">
        <li><a href="#">Documentation</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Support</a></li>
      </ul>
      <ul className="space-y-2">
        <li><a href="#">X (Twitter)</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">YouTube</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="relative z-10 mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 border-t pt-4">
    <p>© 2024 nock. All rights reserved</p>
    <div className="flex gap-4 mt-2 md:mt-0">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
    </div>
  </div>
</footer>

      
    </>
  )
}

export default Footer
