import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
const SearchBar = ({setResults}) =>{
    const [input, setInput] = useState("");

    const fetchData = (value) =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) =>{
           const results = json.filter((user)=>{
                return (
                        value &&
                        user &&
                        user.name && 
                        user.name.toLowerCase().includes(value)
                );
           })
           setResults(results);
        })
    
    }
    const handleChange = (value) =>{
        setInput(value);
        fetchData(value);
    }
    return(
        <div className='input-wrapper'>
                <FaSearch id="search-icon"/>
                <input value={input}  onChange = {(e) =>handleChange(e.target.value)} placeholder='Type to search'/>
        </div>
    );
}

export default SearchBar;