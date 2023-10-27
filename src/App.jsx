import axios from 'axios'
import './App.css'
import { useEffect, useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import AnimeCard from './components/AnimeCard';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiData, setApiData] = useState([]);
  const [status, setStatus] = useState("");

  const fetchAnimes = async (query) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&limit=20`).then(response => { setApiData(response.data.data) });
      setStatus("200")
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = useCallback((query) => {
    setStatus("loading");
    setSearchQuery(query);
    fetchAnimes(query);
  }, [fetchAnimes]);


  return (
    <>
      <div className=''>
        <SearchBar onSearch={handleSearch} />
        {status === "loading" && (
          <Loading />
        )}
        <div className='flex flex-col gap-3'>
          {status === "200" && apiData.map((item, index) => (
            <AnimeCard className='' key={index} title={item.title} img={item.images.jpg.image_url} genre={item.type} eps={item.episodes} url={item.url} score={item.score} />
          ))}
        </div>

      </div>
    </>
  )
}

export default App
