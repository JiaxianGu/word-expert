"use client";
import React, {useState} from 'react';
import SearchPage from './SearchPage';
import Profile from './Profile';
import Link from 'next/link';

const home = () => {
  return (
    <div className='p-1 my-0 bg-sky-400'>
      <Link href='/profile'>profile</Link>
      <div>home</div>
      <SearchPage></SearchPage>
    </div>
    
  )
}

export default home