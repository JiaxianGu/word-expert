"use client";

import { useState } from 'react';
import React from 'react';
let BACKENDURL="";

const SearchComponent = () => {
    
    if(process.env.NODE_ENV === 'development') {
        BACKENDURL='localhost://8080';
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
            console.log(process.env.NODE_ENV);
            console.log(inputValue);
            const response = await fetch(`${BACKENDURL}/word`, {
                method: 'POST',
                body: JSON.stringify({"word": inputValue}),
            });
            console.log(response);
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