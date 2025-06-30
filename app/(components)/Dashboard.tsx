import React from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { LineCharts } from './LineCharts';
import { CalendarDemo } from './Calendar';
import { Progress } from "@/components/ui/progress"

const Dashboard = () => {
  return (
    <>
      <div className='DASHBOARD flex'>
        <div className='LEFT w-3/4 flex flex-col '>

          <div className='flex gap-8'>
              <div className="flex flex-col h-full p-3 mt-4 ml-5">
                <p className="text-4xl font-semibold text-gray-800 ">Hello Aditya </p>
                <p className="mt-1 text-lg text-gray-600">Let’s take a look at your progress and what’s ahead!</p>
              </div>

              <div className='flex justify-center items-center'>
                16th Feb 2024
              </div>
          </div>

          <div className='border-t border-b border-black flex justify-between w-3/4 p-4 m-4'>
            <div className='flex gap-3'>
              <div><FaThumbsUp /></div>
              <p>Finished</p>
              
            </div>
            <div className='flex gap-3'>
              <div><GoClockFill /></div>
             <p>Untracked</p> 
             </div>
            <div className='flex gap-3'>
              <div><GiProgression /></div>
              <p>Time Remaining</p>
            </div>
          </div>

          <div className='flex'>
            <div className='w-3/6'>
            <LineCharts/>
            </div>

            <div className='w-3/7 mx-2'><Progress value={33} /></div>

          </div>
          

        </div>

        <div className='RIGHT flex fex-col '>
        {/* <div className='w-fit h-fit m-4 '><CalendarDemo/> </div> */}
        </div>

      </div>




    </>
  )
}

export default Dashboard
