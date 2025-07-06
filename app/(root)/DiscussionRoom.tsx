// // "use client";
// import React from "react";
// import { useState } from "react";
// import MicButton from "../(components)/MicButton";
// import TranscriptionDisplay from "../(components)/LiveTranscrip";
// import Agent from "@/components/Agent";
// import { getCurrentUser } from "@/lib/actions/auth.actions";

// const DiscussionRoom: React.FC = async () => {

//   const user = await getCurrentUser();

//   return (
//     <>
//     <div className="min-h-screen bg-white text-black p-6 flex flex-col">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h1 className="text-2xl font-bold">DISCUSSION ROOM</h1>
//           <p className="text-lg text-gray-600">Full stack interview</p>
//         </div>
//         <button className="bg-gray-800 text-white px-6 py-2 rounded-md">TIMER</button>
//       </div>

//       {/* Main Grid */}
//       <div className="flex flex-1 gap-6 bg-green-200">
//         {/* Video Panels */}
//         <div className="flex gap-4">
//           {/* <div className="bg-gray-800 w-64 h-64 flex items-center justify-center rounded-md">
//             <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center text-white font-semibold text-center px-2">
//               AI interview
//             </div>
//           </div> */}

//             <div className="bg-red-400">
//         <Agent
//         userName={user?.name!}
//         userId={user?.id}
//         // profileImage={user?.profileURL}
//         type="generate"
//       />
//       </div>

//           <div className="bg-gray-800 w-64 h-64 flex items-center justify-center rounded-md">
//             <div className="bg-gray-300 w-24 h-24 rounded-full flex items-center justify-center text-white font-semibold text-center px-2">
//               interviewee
//             </div>
//           </div>
//         </div>
        

//         {/* Smart Notes Panel */}
//         {/* <div className="flex-1 bg-gray-200 p-4 rounded-md h-full">
//           <h2 className="text-xl font-semibold mb-2">SMART NOTES TAKING PANEL</h2>
//           <ul className="list-decimal ml-4 space-y-2 text-sm">
//             <li>React Query is an important thing</li>
//             <li>React Query is an important thing</li>
//             <li>React Query is an important thing</li>
//           </ul>
//         </div> */}
//       </div>

//       {/* Transcript + End Button */}
//       <div className="mt flex justify-between items-center">
//         {/* <div><MicButton isRecording={isRecording} onStart={startRecording} onStop={stopRecording} /></div> */}
//         <div className="bg-gray-800 text-white p-4 rounded-md w-full mr-4 text-center text-lg">
//           {/* <TranscriptionDisplay text={transcript} /> */}
//           {/* {<TranscriptionUI />} */}
//         </div>
//         <button className="bg-gray-800 text-white px-6 py-2 rounded-md">END INTER</button>
//       </div>
//     </div>
//     </>
//   );
// }

// export default DiscussionRoom;
