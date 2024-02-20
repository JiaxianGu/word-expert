"use client";
import React, { useState, useEffect} from 'react'
import Navbar from './Navbar';
import MainArea from './MainArea';

const page = () => {
    const [pageView, setPageView] = useState("search");
    const [isLoggedIg, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState();
    
    return (
        <div>
            <Navbar ></Navbar>
            <MainArea></MainArea>
        </div>
    )
}

export default page