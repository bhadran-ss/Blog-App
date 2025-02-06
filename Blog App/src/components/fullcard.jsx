import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../layout";

export const Carddetail = () => {
  const { id } = useParams();
  const { data, setData } = useContext(BlogContext);

  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  if (!data) {
    return <h1 className="text-center text-red-500 text-2xl">Loading...</h1>;
  }

  const blog = data.find((object) => object.id === Number(id));

  if (!blog) {
    return <h1 className="text-center text-red-500 text-2xl">Blog Not Found</h1>;
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!newComment) {
      setError("Comment cannot be empty.");
      return;
    }

    const updatedBlog = {
      ...blog,
      comments: [...blog.comments, { user: 'user', text: newComment }],
    };

    const updatedData = data.map((item) =>
      item.id === blog.id ? updatedBlog : item
    );

    setData(updatedData);
    setNewComment(""); 
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <img
        className="w-full h-96 object-cover rounded-md"
        src={blog.img}
        alt={blog.title}
      />
      <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>
      <p className="text-gray-600 mt-2">By {blog.author}</p>
      <p className="mt-4 text-lg">{blog.content}</p>

      <div className="mt-6">
        <h3 className="text-2xl font-semibold">Comments</h3>

        <div className="mt-4">
          {blog.comments.map((comment, index) => (
            <div key={index} className="border-b pb-2 mb-2">
              <p className="text-sm text-gray-600"><strong>{comment.user}:</strong> {comment.text}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleCommentSubmit} className="mt-4">
          {error && <p className="text-red-500">{error}</p>}
          <textarea
            placeholder="Add a comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Submit Comment
          </button>
        </form>
      </div>
    </div>
  );
};
