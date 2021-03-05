import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const Nav = ({ toggleNewToggle }) => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className='flex  absolute top-0 bg-blue-100 w-full p-2 '>
      <div className=' '>
        <span
          onClick={() => setTheme(colorTheme)}
          className='w-10 h-10 bg-indigo-500 block rounded-full shadow-lg 
        cursor-pointer text-white  items-center justify-center'
        >
          {colorTheme === "light" ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          )}
        </span>
      </div>
      <div
        onClick={() => toggleNewToggle()}
        className='ml-auto bg-gray-400 text-indigo-50 dark:text-black dark:bg-white pl-3 pr-3 pb-0 pt-2 rounded-lg mr-3'
      >
        + Create New Topic
      </div>
    </div>
  );
};

export default Nav;
