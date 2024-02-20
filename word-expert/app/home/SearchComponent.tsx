"use client";

import { useState } from 'react';
import React from 'react';
let BACKENDURL="";

interface SearchComponentProps {
    onSearch: (data: any) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
    
    if(process.env.NODE_ENV === 'development') {
        BACKENDURL='http://localhost:8080';
    } else if(process.env.NODE_ENV === 'production') {
        BACKENDURL='https://word-expert-backend.onrender.com';
    }

    const [inputValue, setInputValue] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleButtonClick = async () => {
        if (!inputValue) {
            alert("Please enter a value to search");
        }
        try {
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
            onSearch(meaning);
        } catch (error) {
            console.error('Error fetch data: ', error);
        }
    }

    return (
        <div>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter a word"
            />
            <button onClick={handleButtonClick} className='bg-slate-300 mx-2'>Search</button>
            <button className='bg-teal-400 border-t-orange-200 mx-4' >Add</button>
        </div>
    )
}

export default SearchComponent