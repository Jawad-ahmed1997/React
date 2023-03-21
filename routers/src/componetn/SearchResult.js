import React from 'react'
import { useParams } from 'react-router';

function SearchResult() {
    let found = useParams();
    console.log(found)
    return (
        <div>
           <h1>Find</h1> 
        </div>
    )
}

export default SearchResult;
