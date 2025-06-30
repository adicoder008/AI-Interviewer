"use client";
import React from "react";
import { Mic, MicOff } from "lucide-react"; // optional icons library

type MicButtonProps = {
  isRecording: boolean;
  onStart: () => void;
  onStop: () => void;
};

const MicButton: React.FC<MicButtonProps> = ({ isRecording, onStart, onStop }) => {
  return (
    <button
      className={`flex items-center gap-2 px-6 py-3 rounded-full shadow-md text-white 
        ${isRecording ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'}`}
      onClick={isRecording ? onStop : onStart}
    >
      {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      {isRecording ? "Stop Recording" : "Start Recording"}
    </button>
  );
};

export default MicButton;
