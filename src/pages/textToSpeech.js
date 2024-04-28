import React, { useState } from "react";

const TextToSpeech = () => {
  const [speechValue, setSpeechValue] = useState("");
  const speechHandle = () => {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(speechValue));
  };
  return (
    <div className="text-speech-wrap">
      <input type="text" onChange={(e) => setSpeechValue(e.target.value)} />
      <button type="button" onClick={speechHandle}>
        Speech
      </button>
    </div>
  );
};

export default TextToSpeech;
