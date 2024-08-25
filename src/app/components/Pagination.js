"use client";

export default function Pagination({
  currentPage,
  totalPages,
  handleNext,
  handlePrevious,
  setCurrentPage,
}) {
  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 0}
        className="font-bold px-4 py-2"
      >
        Previous
      </button>
      <div className="flex  gap-0 sm:gap-2 md:gap-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`px-4 py-2 ${index === currentPage ? 'bg-red-200 border-b-2 border-red' : ""}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage + 1 >= totalPages}
        className="font-bold px-4 py-2"
      >
        Next
      </button>
    </div>
  );
}
