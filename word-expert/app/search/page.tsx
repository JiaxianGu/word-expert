"use client";
import React, {useState} from 'react';
import SearchComponent from './SearchComponent';
import DisplayComponent from './DisplayComponent';


const home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className='p-1 my-0 bg-sky-400'>
      <div>home</div>
      <SearchComponent onSearch={setSearchResults} />
      <DisplayComponent data={searchResults}/>
    </div>
    
  )
}

export default home