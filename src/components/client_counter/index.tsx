'use client';

import { useState } from 'react';

const Counter = ({label}) => {
  const [count, setCount] = useState(2);
  // const _ = window.localStorage.length
  // console.log(_);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-2xl shadow-sm max-w-xs">
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
        {label}
      </span>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setCount(count - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-slate-200 active:bg-slate-300"
          aria-label="Decrease count"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
          </svg>
        </button>

        <span className="text-4xl font-mono font-bold text-slate-900 min-w-[3ch] text-center">
          {count}
        </span>

        <button
          onClick={() => setCount(count + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800"
          aria-label="Increase count"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

      <button
        onClick={() => setCount(0)}
        className="mt-4 text-xs font-medium text-slate-500 hover:text-indigo-600 underline underline-offset-4"
      >
        Reset to 0
      </button>
    </div>
  );
};

export default Counter;