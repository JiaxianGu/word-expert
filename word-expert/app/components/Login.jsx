"use clien";
import React, { useState, useEffect } from 'react'
let BACKENDURL="";

const Login = ({ handleSetPageView, handleSetIsLoggedIn, handleSetUserName }) => {
    if(process.env.NODE_ENV === 'development') {
        BACKENDURL='http://localhost:8080';
    } else if(process.env.NODE_ENV === 'production') {
        BACKENDURL='https://word-expert-backend.onrender.com';
    }

    const handleOutsideClick = () => {
        handleSetPageView('search');
    }

    const [windowView, setWindowView] = useState("login"); //entrance, login, signup
    const [inputUserName, setInputUserName] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');

    const handleInputChange = (e, changeType) => {
        if (changeType === "user_name") setInputUserName(e.target.value);
        else if (changeType === "password") setInputPassword(e.target.value);
        else if (changeType === "confirm_password") setInputConfirmPassword(e.target.value);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        if (inputPassword !== inputConfirmPassword) {
            alert ("Passwords do not match. Please try again.");
            setInputConfirmPassword('');
            setInputPassword('');
        } else {
            const reqBody = JSON.stringify({userName : inputUserName, plainPassword: inputPassword})
            const response = await fetch(`${BACKENDURL}/signup`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: reqBody,
            });
            if (response.status === 409) {
                alert("User name already taken. Please choose another one.");
                setInputUserName('');
                setInputPassword('');
                setInputConfirmPassword('');
            }
            if (response.status === 200) {
                handleSetIsLoggedIn(true);
                handleSetUserName(inputUserName);
                handleSetPageView("search");
            }
        }
    }

    const handleLogIn = async(event) => {
        event.preventDefault();
        const reqBody = JSON.stringify({userName : inputUserName, plainPassword: inputPassword})
        const response = await fetch(`${BACKENDURL}/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: reqBody,
        });
        if (response.status === 200) {
            handleSetIsLoggedIn(true);
            handleSetUserName(inputUserName);
            handleSetPageView("search");
        } else if (response.status === 401) {
            alert("Password Incorrect");
            setInputPassword('');
        } else if (response.stauts === 404) {
            alert("User not exist");
            setInputUserName('');
            setInputPassword('');
        }
    }

    const handleClickSignup = () => {
        setWindowView("signup");
    }

    const renderElement = () => {
        if (windowView === "signup") {
            return (
                <>
                    <h2 className="text-2xl font-semibold mt-12 mb-12">Signup</h2>
                    <form className="w-full max-w-xs flex flex-col items-center">
                        <input
                            type="uername"
                            placeholder="User Name"
                            value={inputUserName}
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                            onChange={(e) => handleInputChange(e, "user_name")}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={inputPassword}
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                            onChange={(e) => handleInputChange(e, "password")}
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={inputConfirmPassword}
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                            onChange={(e) => handleInputChange(e, "confirm_password")}
                        />
                        <button
                            type="submit"
                            className="w-2/3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            onClick={handleSignUp}
                        >
                            Signup
                        </button>
                    </form>
                </>
            )
        } else if (windowView === "login") {
            return (
                <>
                    <h2 className="text-2xl font-semibold mt-12 mb-12">Login</h2>
                    <form className="w-full max-w-xs flex flex-col items-center">
                        <input
                            type="uername"
                            placeholder="User Name"
                            value={inputUserName}
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                            onChange={(e) => handleInputChange(e, "user_name")}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={inputPassword}
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                            onChange={(e) => handleInputChange(e, "password")}
                        />
                        <button
                            type="submit"
                            className="w-2/3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                            onClick={handleLogIn}
                        >
                            Login
                        </button>
                        <p className="text-sm mt-6">
                            Not a member?
                            <a href="#" onClick={handleClickSignup} className="text-blue-500 hover:text-blue-600 transition-colors"> Signup</a>
                        </p>
                    </form>
                </>
            )
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center" onClick={handleOutsideClick}>
            <div className="bg-white w-96 h-[550px] rounded-lg shadow-md flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                {renderElement()}
            </div>
        </div>
    )
}

export default Login