"use client"
import React, { useEffect } from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import { LineCharts } from './LineCharts';
import { CalendarDemo } from './Calendar';
import { Progress } from "@/components/ui/progress"
import { useState } from "react";
import { MdOutlineMic } from "react-icons/md";
import Todo from '@/components/ui/Todo';

// function getCurrentDate() {
//   const today = new Date();
//   const date = today.toLocaleDateString("en-IN", {
//     day: "2-digit",
//     month: "2-digit",
//     year: "numeric",
//   });
//   return date;
// }


const Dashboard = () => {
  // const currentDate = getCurrentDate();


const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const date = today.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setCurrentDate(date);
  }, []);

  return (
    <>
    <div>
      <div>hi</div>
      <div className='DASHBOARD flex'>
        
        <div className='LEFT w-3/4 flex flex-col '>

          <div className='flex justify-between'>
              <div className="flex flex-col h-full p-3 mt-4 ml-5">
                <p className="text-4xl font-semibold text-gray-800 ">Hello Aditya </p>
                <p className="mt-1 text-lg text-gray-600">Let’s take a look at your progress and what’s ahead!</p>
              </div>

              <div className='flex justify-center items-center pr-8'>
                 {/* {currentDate} */}
                 <div className='text-2xl'>
                    <p>Hey, Need Help?</p>
                    <p className='text-gray-400'>Just Ask me Anything !</p>
                 </div>

                 <div className='p-5 ml-2 bg-gray-200 rounded-[50%]'><MdOutlineMic size={30} /></div>
              </div>
          </div>

          <div className='border-t border-b border-black flex justify-between w-3/4 p-4 m-4'>
            <div className='flex gap-3'>
              <div><FaThumbsUp size={21}/></div>
              <p>Finished</p>
              
            </div>
            <div className='flex gap-3'>
              <div><GoClockFill size={21}/></div>
             <p>Untracked</p> 
             </div>
            <div className='flex gap-3'>
              <div><GiProgression size={21}/></div>
              <p>Time Remaining</p>
            </div>
          </div>

          <div className='flex'>
            <div className='w-[35%] mt-4 ml-4'>
            <LineCharts/>
            </div>

            {/* <div className='w-3/7 mx-2'><Progress value={33} /></div> */}

          </div>
          

        </div>

        <div className='RIGHT flex flex-col '>
          <div className='w-[20%] h-fit my-4 '><CalendarDemo /> </div>
          <div><Todo/></div>
        </div>

      </div>
      </div>

    </>
  )
}

export default Dashboard
