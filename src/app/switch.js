'use client';
import { useState, useEffect } from 'react';

export default function Switch() {
  const [mode, setMode] = useState(true);
  function switchMode() {
    setMode(!mode);
  }

  useEffect(() => {
    document.body.style.backgroundColor = mode ? 'white' : '#1a212e';
  }, [mode]);
  return (
    <button
      className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] 
    px-12 py-4 border-2 
    border-solid rounded-[8px]
    ${mode ? 'border-[#1a212e] text-[#1a212e]' : 'border-[white] text-[white]'}
    `}
      onClick={switchMode}
    >
      {mode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
