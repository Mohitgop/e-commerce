import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from "../Context/UserContext";
import toast from "react-hot-toast";


function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: ''
  });

  const {login,user} = useContext(UserContext)
  const handleLogin = (e) => {  
    e.preventDefault();
    console.log("Login details submitted:", loginDetails);
    axios.post('http://localhost:3000/api/auth/login', loginDetails)
      .then(response => {
        console.log("Login successful:", response.data);
        login(response.data); // Call the login function from UserContext
        toast.success("Login successful");
      })
      .catch(error => {
        console.error("Login failed:", error);
      });
      
  }


  if (user) {
    return <Navigate to="/" replace />;
  }


  return (
    <form className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Login</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required={true}
        value={loginDetails.email}
        onChange={(e) => setLoginDetails({ ...loginDetails, email: e.target.value })}
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
      required={true}
        value={loginDetails.password}
        onChange={(e) => setLoginDetails({ ...loginDetails, password: e.target.value })}
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className=" cursor-pointer">Forgot your password?</p>
        <Link to="/signup" className="cursor-pointer hover:underline">
          Create account
        </Link>
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4" onClick={handleLogin}>
        Sign In
      </button>
    </form>
  );
}

export default Login;
