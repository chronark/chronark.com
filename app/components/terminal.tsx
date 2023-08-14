"use client";

import React, { useState, useEffect } from 'react';

export default function Terminal({ text }) {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const startDelay = 3000; // Delay before starting in milliseconds (1 second in this case)

    const startTyping = () => {
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          setTypedText((prevText) => prevText + text.charAt(i));
          i++;
        } else {
          clearInterval(typing);
        }
      }, 50); // You can adjust the speed of typing here

      return () => clearInterval(typing); // Cleanup on unmount
    };

    const startTimer = setTimeout(startTyping, startDelay);

    return () => clearTimeout(startTimer); // Cleanup on unmount
  }, [text]);

  return (
    <div className="bg-black text-white text-sm p-6 rounded-lg font-mono">
      <div>
        <span className="text-zinc-500">tom</span>
        <span>@</span>
        <span className="text-zinc-500">obrien</span>:~$ <span className="typing">{typedText}</span>
        <span className="cursor-blink">|</span>
      </div>
    </div>
  );
}