import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from "../Context/UserContext";
import axios from "axios";
import toast from "react-hot-toast";


const SignUp = () => {
    const [signUpDetails, setSignUpDetails] = useState({
      name:"",
      email: '',
      password: ''
    });
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/" replace />;
  }
const handleSignUp = (e) => {
  e.preventDefault();
  console.log("Sign Up details submitted:", signUpDetails);
  axios.post('http://localhost:3000/api/auth/register', signUpDetails)
      .then(response => {
        console.log("Account Created successful:", response.data);
        toast.success("Account Created successfully, please login");
        navigate('/login'); // Redirect to login page after successful sign up
      })
      .catch(error => {
        console.error("Account Creation failed:", error);
      });
}

  return (
    <form class="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div class="inline-flex items-center gap-2 mb-2 mt-10">
        <p class="prata-regular text-3xl">Sign Up</p>
        <hr class="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        type="text"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Name"
        required={true}
        value={signUpDetails.name}
        onChange={(e) => setSignUpDetails({ ...signUpDetails, name: e.target.value })}
      />
      <input
        type="email"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required={true}
        value={signUpDetails.email}
        onChange={(e) => setSignUpDetails({ ...signUpDetails, email: e.target.value })}
      />
      <input
        type="password"
        class="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required={true}
        value={signUpDetails.password}
        onChange={(e) => setSignUpDetails({ ...signUpDetails, password: e.target.value })}
      />
      <div class="w-full flex justify-between text-sm mt-[-8px]">
        <p class=" cursor-pointer">Forgot your password?</p>
        <Link to="/login" className="cursor-pointer hover:underline">
          Login Here
        </Link>
      </div>
      <button class="bg-black text-white font-light px-8 py-2 mt-4" onClick={handleSignUp} >
        Sign Up
      </button>
    </form>

    
  );
};

export default SignUp;
