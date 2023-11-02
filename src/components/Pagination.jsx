import React, { useState, useEffect } from 'react';
import AnimeCard from './AnimeCard';
import ReactPaginate from 'react-paginate';

function PaginatedComponent({ fetchFunction, query}) {

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

    const handlePageChange = (data) => {
        setCurrentPage(data.selected);
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

          <div>
            
            <ReactPaginate className='pagination'

              previousLabel="< Previous"
              breakLabel="..."
              nextLabel="Next >"
              onPageChange={handlePageChange}
              pageRangeDisplayed={3}
              containerClassName="border border-indigo-900"
              pageCount={totalPages}
              renderOnZeroPageCount={null}
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              activeClassName="active"
            />

          </div>
        </div>
    );
}

export default PaginatedComponent;
