import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
   const [error, setError] = useState("");
  const navigate=useNavigate();
   const handleSubmit=()=>{
    if(email==="user@gmail.com"&&password==="user1234"){
navigate("/home")
   }
   else{
    setError("Account not exist!");
    return;
   }
  }
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Login
        </h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="text-blue-500" />
              <span className="ml-2 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
          <p className="mt-4 text-gray-600">
            Not a member?{" "}
            <a href="signup" className="text-blue-500 hover:underline">
              SIGN UP
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
