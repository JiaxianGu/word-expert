"use clien";
import React, { useState, useEffect } from 'react'


const Login = ({ handleSetPageView }) => {
    const handleOutsideClick = () => {
        handleSetPageView('search');
    }

    const [windowView, setWindowView] = useState("login"); //entrance, login, signup

    const handleClickLogin = () => {
        setWindowView("login");
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
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                        />
                        <button
                            type="submit"
                            className="w-2/3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-4/5 p-2 mb-8 border border-gray-300 rounded"
                        />
                        <button
                            type="submit"
                            className="w-2/3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
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
            <div className="bg-white w-96 h-[550px] rounded-lg shadow-md flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                {renderElement()}
            </div>
        </div>
    )
}

export default Login