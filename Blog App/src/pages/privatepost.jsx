import { useContext, useState } from "react";
import { BlogContext } from "../layout";
import{Card}from "../components/card"
export const Private=()=>{
const { Privatepost } = useContext(BlogContext);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;
  
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const currentCards = Privatepost.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < Privatepost.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (

    <div className="max-w-10xl bg-slate-200">
      <section className="flex flex-wrap justify-center sm:flex-row items-center gap-8 mb-12 ">
        
          {currentCards.map((object) => (
            <Card blog={object} key={object.id} /> // Corrected: key is directly on <Card>
          ))}
          
        
      </section>

      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-white w-20 h-10 rounded-md m-3 disabled:opacity-50"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          Prev
        </button>
        <button
          className="bg-white w-20 h-10 rounded-md m-3 disabled:opacity-50"
          onClick={handleNext}
          disabled={endIndex >= Privatepost.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}