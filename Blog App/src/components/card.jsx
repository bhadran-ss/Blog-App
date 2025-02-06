import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
export const Card = ({ blog }) => {
  const navigator=useNavigate();
  const handleCardClick=()=>{
    navigator(`/overview/${blog.id}`);
  }

  return (
    <div
      className="relative group max-w-xl bg-white bg-opacity-90 shadow-2xl rounded-2xl overflow-hidden border border-gray-300 m-5 
                 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0px_10px_30px_rgba(173, 216, 230,0.6)] 
                 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col items-center p-6">
        <img
          className="w-full h-72 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
          src={blog.image}
          alt={blog.title}
        />

        <div className="text-center mt-4">
          <h2 className="text-2xl font-extrabold text-gray-600 group-hover:text-gray-800 transition duration-300">
            {blog.title}
          </h2>
          <p className="text-gray-600 mt-2 text-lg">{blog.author}</p>
        </div>
      </div>
    </div>
  );
};
