import React from 'react'
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.actions";

const layout = async ({children}:{children: React.ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) redirect("/");
  return (
    <>
    <div className='flex justify-center items-center min-h-screen gap-5 border border-black'>
        
        <img src="https://images.unsplash.com/photo-1727767579177-2ac433c07da3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          height={600} width={300}
          alt="" />
        <div className=' rounded-md h-[70%] w-[32%] '>
            {children}
        </div>
    </div>
      
    </>
  )
}

export default layout
