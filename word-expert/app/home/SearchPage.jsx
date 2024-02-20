import React, {useState} from 'react'
import SearchComponent from './SearchComponent';
import DisplayComponent from './DisplayComponent';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    return (
        <div>
            <div>SearchPage</div>
            <SearchComponent onSearch={setSearchResults} />
            <DisplayComponent data={searchResults}/>
        </div>
        
    )
}

export default SearchPage