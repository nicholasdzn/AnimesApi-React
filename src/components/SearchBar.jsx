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
        <div className='flex justify-center pt-4'>
            <input type="text"
                onChange={handleInputValue}
                value={inputText}
                placeholder='Digite o nome de algum anime'
                className='p-3 w-96 border rounded-l-md'
            />
            <button className='bg-violet-900 rounded-r-md text-white p-3' onClick={handleSearch}>Buscar</button>
        </div>
    )
}

export default SearchBar