import { SunIcon } from '@heroicons/react/solid';
import React from 'react';

const Loading = () => {
  return (
    <div className='bg-gradient-to-br from-teal-400 to-blue-500 min-h-screen flex flex-col items-center justify-center text-slate-500'>
      <SunIcon
        className='h-25 w-24 animate-bounce text-yellow-500'
        color='yellow'
      />
      <h1 className='text-3xl font-bold text-center mb-10 animate-pulse'>
        Loading City Weather Information
      </h1>

    </div>
  );
};

export default Loading;