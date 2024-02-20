"use client";
import React from 'react'
import { useState } from 'react';
let BACKENDURL="";

const Search = () => {

    if(process.env.NODE_ENV === 'development') {
        BACKENDURL='http://localhost:8080';
    } else if(process.env.NODE_ENV === 'production') {
        BACKENDURL='https://word-expert-backend.onrender.com';
    }

    const [inputValue, setInputValue] = useState('');
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleButtonClick = async () => {
        if (!inputValue) {
            alert("Please enter a value to search");
        }
        try {
            setWord(inputValue);
            const reqBody = JSON.stringify({word: inputValue})
            const response = await fetch(`${BACKENDURL}/word`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: reqBody,
            });
            const wordInfo = await response.json();
            console.log(wordInfo);
            const meaning = wordInfo.meanings[0].definitions[0].definition;
            console.log("meaning is: " + meaning);
            setMeaning(meaning)
        } catch (error) {
            console.error('Error fetch data: ', error);
        }
    }


  return (
    <div className="my-16 max-w-lg mx-auto p-4 space-y-4">
        <div className="flex items-center space-x-2">
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a word"
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button 
                onClick={handleButtonClick} 
                className='px-4 py-2 bg-slate-300 rounded-lg shadow hover:bg-slate-400 transition-colors'
            >Search</button>
            <button 
            className='px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition-colors mx-4'
            >Add</button>
        </div>
        
        <div className="p-4 border border-gray-300 rounded-lg shadow"
        >{meaning}</div>
    </div>
  )
}

export default Search