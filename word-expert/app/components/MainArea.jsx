import React from 'react';
import Search from './Search';
import Library from './Library';
import Login from './Login';

const MainArea = ({ pageView, handleSetPageView, isLoggedIn, userName, handleSetIsLoggedIn, handleSetUserName}) => {
    const renderElement = (pageView) => {
        if (pageView === 'search') {
            return <Search></Search>
        } else if (pageView === 'login') {
            return <Login 
            handleSetPageView={handleSetPageView}
            handleSetIsLoggedIn={handleSetIsLoggedIn}
            handleSetUserName={handleSetUserName}
            ></Login>
        } else if (pageView === 'library') {
            return <Library></Library>
        }
    }
  
    return (

    <div className='pt-14'>
        {renderElement(pageView)}
    </div>
  )
}

export default MainArea