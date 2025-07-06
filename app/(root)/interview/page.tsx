// "use client";
import React from "react";
import { useState } from "react";
import MicButton from "../../(components)/MicButton";
import TranscriptionDisplay from "../../(components)/LiveTranscrip";
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.actions";

const DiscussionRoom: React.FC = async () => {

  const user = await getCurrentUser();

  return (
    <>
    <div className="min-h-screen bg-white text-black p-6 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">DISCUSSION ROOM</h1>
          <p className="text-lg text-gray-600">Full stack interview</p>
        </div>
        <button className="bg-gray-800 text-white px-6 py-2 rounded-md">TIMER</button>
      </div>

      {/* Main Grid */}
      {/* <div className="flex flex-1 gap-6 bg-blue-400">             */}
        <Agent
        userName={user?.name!}
        userId={user?.id}
        // profileImage={user?.profileURL}
        type="generate"
      />
      {/* </div>  */}
    </div>
    </>
  );
}

export default DiscussionRoom;