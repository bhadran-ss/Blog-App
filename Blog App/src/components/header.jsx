import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../layout";

export const Header = () => {
  const [search, setSearch] = useState();
   const { data,setData,privatepost,setprivatepost } = useContext(BlogContext);
  const navigate=useNavigate();
  function handleSearch() {
    if (search.trim() === "") {
      setData(data);
      return;
    }
    let privateresult = privatepost.filter((v) =>
      v.title.toLowerCase().includes(search.toLowerCase())
    );

    let result = data.filter((v) =>
      v.title.toLowerCase().includes(search.toLowerCase())
    );
    setprivatepost(privateresult)
    setData(result); 
  }
  return (
    <>
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">bloggs</h1>
          <nav>
            <ul className="flex space-x-10 text-xl">
              <li>
                <a href="home" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="login" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                {/* <a href="signup" className="hover:underline">
                  Signup
                </a> */}
              </li>
              <li>
                <a href="privatepost" className="hover:underline">
                Private Blogs
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-between items-center  text-black rounded-full px-3  py-1 mx-10 w-50">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent bg-white rounded h-8 w-30 border-black "
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <Search className="w-5 h-5" /> */}
            <button className="mx-5  border-neutral-800 text-white rounded text-xl "
           onClick={handleSearch}
           >
              search
            </button>
            <button className="text-white border-slate-950 rounded text-xl" onClick={()=>{
              navigate("/create");
            }}>create</button>
          </div>
        </div>
      </div>
    </>
  );
};
