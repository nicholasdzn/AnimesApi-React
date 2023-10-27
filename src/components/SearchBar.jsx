import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [inputText, setInputText] = useState("");

    const handleInputValue = (e) => {
        const text = e.target.value;
        setInputText(text);
    }

    const handleSearch = () => {
        onSearch(inputText);
    }

    return (
        <div className='flex flex-row justify-start'>
            <input type="text"
                onChange={handleInputValue}
                value={inputText}
                placeholder='digite o nome de algum anime'
                className='p-3'
            />
            <button className='bg-slate-900 p-3' onClick={handleSearch}>Buscar</button>
        </div>
    )
}

export default SearchBar