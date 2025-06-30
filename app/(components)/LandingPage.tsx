import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[url('https://images.unsplash.com/photo-1716436329488-9a95773215e0?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-[89.5vh] flex items-center justify-center">
            {/* <Navbar /> */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className='z-50 flex flex-col items-center justify-center text-center gap-4'>
                    <div className='text-5xl text-white'>Your First AI Assitant for Studies</div>
                    <div className='text-4xl text-white'>Smarter Study Starts Here</div>
                    <button className='bg-white text-black px-3 py-2 rounded-md'>SignUp Now</button>
                </div>
            </div>
            {/* ......how it works....... */}
            <div className="bg-gray-100 p-8">
                <h1 className="text-4xl font-bold mb-4 text-center ">How It Works</h1>
                <p className="text-2xl mb-4 text-center">Our AI assistant helps you study smarter, not harder. Here's how:</p>
                <ul className="flex list-disc pl-5 gap-8 justify-center">
                    <div className='w-[28vw]'>
                        <img src="https://media.istockphoto.com/id/2207142039/photo/ai-powered-teaching-solutions-intelligent-tutoring-systems-and-personalized-learning.webp?a=1&b=1&s=612x612&w=0&k=20&c=mCS3sKIJj2PlLebw3zvvkbTxINJPgMJx0ria3LYjq-o=" alt="" />
                        <div>Personalized study plans based on your learning style</div>
                        </div>

                    <div className='w-[28vw]'>
                        <img src="https://media.istockphoto.com/id/2160286560/photo/e-learning-graduate-certificate-program-concept-a-person-with-a-light-bulb-symbolizing.webp?a=1&b=1&s=612x612&w=0&k=20&c=m3OBjqyEJ4hXdpybuoUc--Klvtp-dQyCAgIJnimUYs4=" alt="" />
                        <div>Instant access to resources and explanations</div>
                        </div>

                    <div className='w-[28vw]'>
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>Progress tracking and feedback</div>
                        
                        </div>
                </ul>
            </div>
            {/* .............footer............ */}
            <Footer />



        </>
    )
}

export default LandingPage
