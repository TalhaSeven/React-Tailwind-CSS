import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaUser,
  FaLock,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setUser } from "../Redux/Features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setUser({
        username: userName,
        password: passWord,
      })
    );
    setPassWord("");
    setUserName("");
    navigate("/card");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex h-[94.5vh] bg-gray-100 bg-gradient-to-r from-purple-700 to-blue-900 justify-center items-center hover:shadow-lg transition duration-300">
        <div className="bg-white py-8 px-10 rounded-lg shadow-lg">
          <h2 className="font-bold text-2xl mb-4 text-center">Login</h2>
          <div className="mb-8">
            <label
              htmlFor="username"
              className="block mb-4 text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaUser className="text-gray-400" />
              </span>
              <input
                onChange={(e) => setUserName(e.target.value)}
                className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 border-gray-300"
                type="text"
                id="username"
                placeholder="Enter your username"
                value={userName}
              />
            </div>
          </div>
          <div className="mb-8 relative">
            <label
              htmlFor="password"
              className="block mb-4 text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FaLock className="text-gray-400" />
              </span>
              <input
                onChange={(e) => setPassWord(e.target.value)}
                className="pl-10 pr-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 border-gray-300"
                type="password"
                id="password"
                value={passWord}
                placeholder="Enter your password"
              />
            </div>
            <Link className="block mt-4 text-sm text-blue-500">
              Forgot Password?
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white py-2 rounded-md ${
                userName && passWord ? 'hover:bg-blue-600' : 'opacity-50 cursor-not-allowed'
              } focus:outline-none focus:ring focus:border-blue-300 transition duration-300`}
              disabled={!userName || !passWord}
            >
              Login
            </button>
          </div>
          <div className="mt-6">
            <h2 className="text-center text-sm text-gray-600">
              Or Sign Up Using
            </h2>
            <div className="flex justify-center mt-4 space-x-4">
              <Link className="mr-4 text-blue-500">
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link className="mr-4 text-blue-500">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link className="mr-4 text-blue-500">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link className="mr-4 text-blue-500">
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link className="mr-4 text-blue-500">
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link className="text-blue-500">
                <FaGoogle className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
