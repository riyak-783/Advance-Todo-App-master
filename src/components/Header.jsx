import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FcTodoList } from "react-icons/fc";
import { AiFillFire } from 'react-icons/ai';
import { MdSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';


function Header() {

  const { user, logout } = useAuth()
  const {theme, ToggleTheme} = useTheme()


  return (
    <div className='sticky z-10 shadow-inner top-0 theme-bg  select-none flex font-semibold justify-between p-3 px-10 '>
      <span className='flex text-2xl  font-black font-serif items-center gap-2'><FcTodoList className='text-3xl '/> TODO </span>
      <div className='flex space-x-24'>
      <div onClick={ToggleTheme} className='cursor-pointer p-1 text-xl ' >
        {theme === 'dark' ? <MdSunny className='theme-anim' /> : <IoMdMoon className='theme-anim' />}
      </div>
      {user?.isLoggedin ? <div><span className='mr-6 cursor-pointer '>  @{user.username} </span><span className='theme-bg-i rounded p-2 py-1 cursor-pointer' onClick={logout}> Logout </span> </div> :
        <span className='space-x-5'>
          <Link className='hover:underline font-serif' to={"/signup"}>Signup</Link>
          <Link className='hover:underline font-serif' to={"/login"}>Login</Link>
        </span>}
      </div>
    </div>
  )
}

export default Header
