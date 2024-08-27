import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Layout() {
  return (
    <div className='min-h-svh w-full  theme-bg '>
      <div className='min-h-svh mx-auto max-w-5xl'>
      <Header />
      <Outlet/>
      </div>
      <div className='text-center gap-2 p-8 theme-bg-black'> Developed by <span className=' font-bold text-lg'>Riya Kumari ❤️</span> 
        <div className='text-2xl flex mx-auto w-fit gap-3 mt-3'>
          <a href={"https://github.com/ibrarullah23"} target='_blank'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/ibrar-ullah-23m/' target='_blank'><FaLinkedin /></a>
        </div>
      </div>
    </div>
  )
}

export default Layout
