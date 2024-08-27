import React, { useRef } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const {signup} = useAuth()

  const username = useRef();
  const password = useRef();
  const email = useRef();
  
  const navigate = useNavigate()

  const handelSignup = (e) => {
    e.preventDefault()
    const userData = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    signup(userData);
    navigate("/login")
  }

  return (
    <>
      <form onSubmit={handelSignup} className='mt-24 flex flex-col  gap-4 w-[400px] mx-auto'>
        <h1 className='text-center font-extrabold font-serif text-xl my-4'>Signup</h1>
        <input ref={username} className='border-2 font-serif theme-bg-gray rounded px-2 py-px border-gray-500/30' type="text" required name='username'   placeholder='Username' />
        <input ref={email} className='border-2 font-serif theme-bg-gray rounded px-2 py-px border-gray-500/30' type="email" required name='email' autoComplete='username'  placeholder='user@gmail.com' />
        <input ref={password} className='border-2 font-serif theme-bg-gray rounded px-2 py-px border-gray-500/30' type="password" required name='password' placeholder='password' />
        <button type='submit' className='bg-[#7A1CAC]  rounded text-lg font-semibold p-1 ' >Signup</button>
      </form>
    </>
  )
}

export default Signup
