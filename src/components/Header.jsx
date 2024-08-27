import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FcTodoList } from "react-icons/fc";
import { MdSunny } from 'react-icons/md';
import { IoMdMoon } from 'react-icons/io';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { user, logout } = useAuth();
  const { theme, ToggleTheme } = useTheme();

  return (
    <div className='sticky z-10 shadow-inner top-0 theme-bg select-none flex font-semibold justify-between p-3 md:px-10 px-4'>
      <span className='flex text-xl sm:text-2xl font-black font-serif items-center gap-1 sm:gap-2'>
        <FcTodoList className='text-2xl sm:text-3xl' /> TODO
      </span>
      <div className='flex items-center space-x-4 sm:space-x-24'>
        <div onClick={ToggleTheme} className='cursor-pointer p-1 text-lg sm:text-xl'>
          {theme === 'dark' ? <MdSunny className='theme-anim' /> : <IoMdMoon className='theme-anim' />}
        </div>
        {user?.isLoggedin ? (
          <div className='flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0'>
            <span className='mr-0 sm:mr-6 cursor-pointer text-sm sm:text-base'>@{user.username}</span>
            <span 
              className='theme-bg-i rounded p-2 py-1 text-sm sm:text-base cursor-pointer' 
              onClick={logout}
            >
              Logout
            </span>
          </div>
        ) : (
          <span className='flex space-x-3 sm:space-x-5 text-sm sm:text-base'>
            <Link className='hover:underline font-serif' to={"/signup"}>Signup</Link>
            <Link className='hover:underline font-serif' to={"/login"}>Login</Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Header;