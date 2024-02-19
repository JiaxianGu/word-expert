"use client";

import { useState } from 'react';
import React from 'react';
let BACKENDURL="";

const SearchComponent = () => {
    
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
            <button onClick={handleButtonClick}>Search</button>
        </div>
    )
}

export default SearchComponent