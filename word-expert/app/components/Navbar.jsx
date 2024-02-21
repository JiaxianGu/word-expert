"use client";
import React from 'react'

const Navbar = ({ handleSetPageView, isLoggedIn, userName, handleSetIsLoggedIn, handleSetUserName }) => {

    const handleSearchClick = () => {
        handleSetPageView('search');
    }

    const handleMyWordClick = () => {
        handleSetPageView('library')
    }

    const handleLoginClick = () => {
        handleSetPageView('login')
    }

    const renderLogInOutButton = () => {
        if (isLoggedIn) {
            return (
                <>
                    <div className='inline-flex items-center justify-center py-2 px-4 mr-2 text-red-500 border-2 border-red-500 rounded hover:bg-red-300 transition duration-300 cursor-pointer text-lg'
                        onClick={() => {handleSetIsLoggedIn(false); handleSetUserName('')}}
                    >
                        Log out
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='inline-flex items-center justify-center py-2 px-4 mr-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300 cursor-pointer text-lg'
                        onClick={handleLoginClick}
                    >
                        Log in
                    </div>
                </>
            )
        }
    }

    return (
        <div className='bg-gray-300 w-full h-14 fixed flex items-cneter justify-between'>

            <div className='divide-x divide-slate-400'>
                <div
                    className='inline-flex items-center justify-center h-full w-36 bg-gray-300 text-black  text-lg border-white hover:bg-gray-400 transition duration-300 cursor-pointer'
                    onClick={handleSearchClick}
                >
                    Search
                </div>
                <div
                    className='inline-flex items-center justify-center h-full w-36 bg-gray-300 text-black  text-lg hover:bg-gray-400 transition duration-300 cursor-pointer'
                    onClick={handleMyWordClick}
                >
                    My Word
                </div>
            </div>

            <div className='flex items-center '>
                <div className='mr-4'>{userName}</div>
                {renderLogInOutButton()}
            </div>

        </div>
    )
}

export default Navbar