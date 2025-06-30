import React from "react";

type TranscriptionDisplayProps = {
  text: string;
};

const TranscriptionDisplay: React.FC<TranscriptionDisplayProps> = ({ text }) => {
  return (
    <div className="mt-6 p-4 rounded-lg bg-gray-100 shadow-inner border border-gray-300">
      <h2 className="text-lg font-semibold mb-2 text-gray-800">Real-Time Transcript:</h2>
      <p className="text-gray-700 whitespace-pre-wrap min-h-[3rem]">
        {text || "Speak to see the transcription here..."}
      </p>
    </div>
  );
};

export default TranscriptionDisplay;
