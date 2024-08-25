"use client"

import { useState } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import GifCard from './GifCard';
import LoadingSpinner from './LoadingSpinner';
import { fetchGifs } from './gifConfig';

export default function HeroSection() {
  const [searchValue, setSearchValue] = useState('');
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 3;

  const handleSearch = async () => {
    setLoading(true);
    const gifResults = await fetchGifs(searchValue);
    setGifs(gifResults);
    console.log(gifResults)
    setCurrentPage(0);
    setTotalPages(Math.ceil(gifResults.length / itemsPerPage));
    setLoading(false);
  };

  const handleNext = () => {
    const nextPage = currentPage + 1;
    if (nextPage < totalPages) {
      setCurrentPage(nextPage);
    }
  };

  const handlePrevious = () => {
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      setCurrentPage(prevPage);
    }
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedGifs = gifs.slice(startIndex, endIndex);

  return (
    <main className="fixed flex w-full  justify-center top-[100px] gap-1">
      <div className="rounded-[20px] max-w-[816px] mx-auto flex flex-col w-full justify-center gap-4 bg-white p-6">
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearch={handleSearch}
        />
        <div className="flex flex-col items-center">
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="flex justify-center">
              {displayedGifs.map((gif) => (
                <GifCard key={gif.id} gif={gif} />
              ))}
            </div>
          )}
          
          {!loading && gifs.length > 0 && (
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handleNext={handleNext}
                handlePrevious={handlePrevious}
                setCurrentPage={setCurrentPage}
            />
          )}
        </div>
      </div>
    </main>
  );
}
