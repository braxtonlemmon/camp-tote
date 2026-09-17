"use client";
import { useState } from "react";

export default function Homepage() {
  const [questionToUser, setQuestionToUser] = useState<string>(
    "Let's start! First off, where are you going?",
  );
  const [userResponse, setUserResponse] = useState<string>("");

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* question */}
      <p className="text-lg text-center">{questionToUser}</p>
      {/* response */}
      <textarea
        className="w-full border border-gray-300 p-2 resize-none field-sizing-content min-h-[5lh] max-h-[10lh] max-w-4xl mx-auto bg-white rounded-xl"
        value={userResponse}
        onChange={(e) => setUserResponse(e.target.value)}
      />
    </div>
  );
}
