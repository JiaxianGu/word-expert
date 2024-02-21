"use client";
import React, { useState, useEffect} from 'react'
import Navbar from './Navbar';
import MainArea from './MainArea';



const Page = () => {
    const [pageView, setPageView] = useState("search"); // search, library, login
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState();

    const handleSetPageView = (newPageView) => {
        setPageView(newPageView);
    }

    const handleSetIsLoggedIn = (newIsLoggedIn) => {
        setIsLoggedIn(newIsLoggedIn);
    }

    const handleSetUserName = (newUserName) => {
        setUserName(newUserName);
    }

    return (
        <div>
            <Navbar 
                pageView={pageView}
                handleSetPageView={handleSetPageView}
                isLoggedIn={isLoggedIn}
                userName={userName}
                handleSetIsLoggedIn={handleSetIsLoggedIn}
                handleSetUserName={handleSetUserName}
                ></Navbar>
            <MainArea 
                pageView={pageView}
                handleSetPageView={handleSetPageView}
                isLoggedIn={isLoggedIn}
                userName={userName}
                handleSetIsLoggedIn={handleSetIsLoggedIn}
                handleSetUserName={handleSetUserName}
            ></MainArea>
        </div>
    )
}

export default Page