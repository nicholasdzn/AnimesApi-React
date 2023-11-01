import axios from 'axios'
import './App.css'
import { useEffect, useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import Header from './components/Header';
import PaginatedComponent from './components/Pagination';

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [status, setStatus] = useState("");
  const [responseData, setResponseData] = useState();

  const fetchAnimes = async (page, query) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&page=${page}`);
      return response
    } catch (error) {
      console.log(error);
    }
  }

  const fetchTopAnimes = async (page) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/top/anime?page=${page}`)
      return response
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = useCallback((query) => {
    setStatus("Loading");
    setSearchQuery(query);
    setStatus('200')
  }, []);

  const handleClick = () => {
    setStatus('Loading Main Page');
    setResponseData(fetchTopAnimes());
    setStatus('Main Page');
  }

  useEffect(() => {
    setStatus('Main Page');
  }, []);

  return (
    <>
      <Header onclick={handleClick}/>

      <div className=''>
        
        <SearchBar onSearch={handleSearch} />
        
        {status === "Main Page" && (
          <>
            <h1 className='font-bold text-3xl text-center mt-2'>Top Animes</h1>
            <PaginatedComponent fetchFunction={fetchTopAnimes}/>
          </>
        )}

        {status === "Init" && (<Loading />)}
        {status === "Loading" && (<Loading />)}
        
        {status === "200" && (
          <>
            <h1 className='font-bold text-3xl text-center mt-2'>Animes</h1>
            <PaginatedComponent fetchFunction={fetchAnimes} query={searchQuery}/>
          </>
        )}

      </div>
    </>
  )
}

export default App
