"use clien";
import React, { useState, useEffect } from 'react'


const Login = ({ handleSetPageView }) => {
    const handleOutsideClick = () => {
        handleSetPageView('search');
    }

    const [windowView, setWindowView] = useState("entrance"); //entrance, login, signup

    const handelClickLogin = () => {
        setWindowView("login");
    }

    const handelClickSignup = () => {
        setWindowView("signup");
    }

    const renderElement = () => {
        if (windowView === "entrance") {
            return (
                <>
                    <h2 className="text-2xl w-full font-bold mt-12 mb-12 text-center">Welcome</h2>
                    <div className="space-y-12 mt-12 w-2/3">
                        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
                        onClick={handelClickLogin}>
                            Login
                        </button>
                        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors"
                        onClick={handelClickSignup}>
                            Sign Up
                        </button>
                    </div>
                </>

            )
        } else if (windowView === "login") {
            return (
                <>
                login
                </>
            )
        } else if (windowView === "signup") {
            return (
                <>
                signup
                </>
            )
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center" onClick={handleOutsideClick}>
            <div className="bg-white w-72 h-96 rounded-lg shadow-md flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                {renderElement()}
            </div>
        </div>
    )
}

export default Login