import axios from 'axios'
import './App.css'
import { useEffect, useState, useCallback } from 'react';
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import AnimeCard from './components/AnimeCard';
import Header from './components/Header';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [apiData, setApiData] = useState([]);
  const [status, setStatus] = useState("");

  const fetchAnimes = async (query) => {
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${query}&limit=20&order_by=popularity&sort=asc`).then(response => { setApiData(response.data.data) });
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
      <Header />
      <div className=''>
        <SearchBar onSearch={handleSearch} />
        {status === "200" && <h1 className='font-bold text-3xl text-center mt-2'>Animes</h1>}
        {status === "loading" && (
          <Loading />
        )}
        <div className='gallery-container mt-3 pb-10'>
          {status === "200" && apiData.map((item, index) => (
            <AnimeCard className='' key={index} title={item.title} img={item.images.jpg.image_url} genre={item.type} eps={item.episodes} url={item.url} score={item.score} />
          ))}
        </div>

      </div>
    </>
  )
}

export default App
