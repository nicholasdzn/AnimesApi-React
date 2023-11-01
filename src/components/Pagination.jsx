import React, { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';

function PaginatedComponent({ fetchFunction, query }) {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [pageData, setPageData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            const result = await fetchFunction(currentPage, query);

            setPageData(result.data.data);
            setTotalPages(result.data.pagination.last_visible_page);
        }

        fetchData();

    }, [currentPage, fetchFunction, query]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const getVisiblePages = () => {
        const pagesToShow = 5;
        let pages = [];
    
        // Adiciona as primeiras páginas
        for (let i = 1; i <= pagesToShow && i <= totalPages; i++) {
          pages.push(i);
        }
    
        // Adiciona as páginas do meio (baseado na página atual)
        if (currentPage > pagesToShow + 2) { // +2 é para deixar um espaço entre os primeiros números e o meio
          pages.push('...'); // Elipse para mostrar que há páginas sendo omitidas
    
          let startMiddle = currentPage - Math.floor(pagesToShow / 2);
          let endMiddle = currentPage + Math.floor(pagesToShow / 2);
    
          if (endMiddle > totalPages - pagesToShow) {
            startMiddle -= (endMiddle - (totalPages - pagesToShow)) + 1;
          }
    
          for (let i = startMiddle; i <= endMiddle; i++) {
            pages.push(i);
          }
        }
    
        // Adiciona as últimas páginas
        if (currentPage < totalPages - pagesToShow - 2) { // -2 é novamente para deixar um espaço
          pages.push('...');
          for (let i = totalPages - pagesToShow + 1; i <= totalPages; i++) {
            pages.push(i);
          }
        }
    
        return pages;
      }
    
    return (

        <div>
            <div className='gallery-container mt-3 pb-10'>

                {pageData.map((item, index) => (
                    <AnimeCard className='' 
                    key={index} 
                    title={item.title} 
                    img={item.images.jpg.image_url} 
                    genre={item.type} 
                    eps={item.episodes} 
                    url={item.url} 
                    score={item.score} />
                ))}
            
            </div>

            <div className='pagination'>
                {getVisiblePages().map((page, index) => (
                <button 
                    key={index} 
                    onClick={() => page !== '...' && handlePageChange(index + 1)}
                    disabled={page === '...'}
                    className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                >
                    {page}
                </button>
                ))}
            </div>
            
        </div>
    );
}

export default PaginatedComponent;
