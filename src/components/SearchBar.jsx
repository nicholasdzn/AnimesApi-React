import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [inputText, setInputText] = useState("");

    const handleInputValue = (e) => {
        const text = e.target.value;
        setInputText(text);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSearch(inputText);
        }
    }

    const handleSearch = () => {
        onSearch(inputText);
    }

    return (
        <div className='flex justify-center pt-4'>
            <input type="text"
                onChange={handleInputValue}
                onKeyUp={handleKeyPress}
                value={inputText}
                placeholder='Digite o nome de algum anime'
                className='p-3 border rounded-l-md md:w-96 w-30'
            />
            <button className='bg-black rounded-r-md text-white p-3' onClick={handleSearch}>Buscar</button>
        </div>
    )
}

export default SearchBar