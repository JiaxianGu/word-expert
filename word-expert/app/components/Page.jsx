"use client";
import React, { useState, useEffect} from 'react'
import Navbar from './Navbar';
import MainArea from './MainArea';



const Page = () => {
    const [pageView, setPageView] = useState("search"); // search, library, login
    const [isLoggedIg, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState();

    const handleSetPageView = (newPageView) => {
        setPageView(newPageView);
    }

    return (
        <div>
            <Navbar 
                handleSetPageView={handleSetPageView}
                ></Navbar>
            <MainArea 
                pageView={pageView}
            ></MainArea>
        </div>
    )
}

export default Page