import { useContext, useState } from "react";
import { BlogContext } from "../layout";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const { data, setData, Privatepost, setPrivatepost } = useContext(BlogContext);
  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    id: "",
    img: "",
    title: "",
    author: "",
    content: "",
    visibility: "public"
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!blog.title || !blog.author || !blog.img || !blog.content) {
      setError("All fields are required!");
      return;
    }

    // Generate a new blog object with an id
    const newBlog = { ...blog, id: blog.visibility === "public" ? data.length + 1 : Privatepost.length + 1 };
    
    if (blog.visibility === "public") {
      setData([...data, newBlog]);
      navigate("/");
    } else if (blog.visibility === "private") {
      setPrivatepost([...Privatepost, newBlog]);
      navigate("/privatepost");
    }
    setBlog({
      id: "",
      img: "",
      title: "",
      author: "",
      content: "",
      visibility: "public",
    });

   
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold text-center">Create a New Blog</h1>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={blog.title}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full"
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={blog.author}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full"
        />

        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={blog.img}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full"
        />

        <textarea
          name="content"
          placeholder="Write your blog content here..."
          value={blog.content}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full h-40"
        ></textarea>

      
        <select
          name="visibility"
          value={blog.visibility}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded-lg w-full"
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>

        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
