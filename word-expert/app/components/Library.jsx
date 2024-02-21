"use client";
import React, { useEffect, useState } from 'react'
let BACKENDURL = ''


const Library = ({ userName }) => {
  const [words, setWords] = useState([])
  if (process.env.NODE_ENV === 'development') {
    BACKENDURL = 'http://localhost:8080';
  } else if (process.env.NODE_ENV === 'production') {
    BACKENDURL = 'https://word-expert-backend.onrender.com';
  }
  const fetchWords = async () => {
    try {
      const reqBody = JSON.stringify({ "user": userName });
      console.log(reqBody);
      const response = await fetch(`${BACKENDURL}/get`, 
      {method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: reqBody,});
      const data = await response.json();
      setWords(data);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-center mb-6">Learned Words</h1>
      <div className="divide-y divide-gray-300">
        
        {words.map(({ word, meaning }, index) => (
          <div key={index} className="py-4 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <span className="text-lg font-medium w-80">{word}</span>
            <span className="text-gray-600">{meaning}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Library