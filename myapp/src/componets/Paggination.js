import React, { useState, useEffect } from "react";

const PaginationExample = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=15") // Example API
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  // Calculate indexes for pagination
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentCards.map((card) => (
          <div key={card.id} className="border p-4 rounded shadow">
            <img src={card.thumbnailUrl} alt={card.title} className="w-full h-32 object-cover" />
            <h2 className="text-lg font-bold">{card.title}</h2>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-4 py-2 border rounded">{currentPage} / {totalPages}</span>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationExample;
