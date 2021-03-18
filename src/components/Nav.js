import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { GoogleLogin } from "react-google-login";
import { isEmpty } from "lodash";

const Nav = ({ toggleNewToggle, Reset, responseGoogle, userName, Logout }) => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className='flex  absolute top-0 bg-blue-100 w-full p-3'>
      <div className='flex '>
        {/* <span onClick={() => Reset()}>
          <svg
            className='w-10 h-10 mr-10 ml-4 '
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
            ></path>
          </svg>
        </span> */}
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
      <div className='flex ml-auto'>
        <div
          onClick={() => toggleNewToggle()}
          className='bg-gray-400 text-indigo-50 dark:text-black
         dark:bg-white pl-3 pr-3 pb-0 pt-2 rounded-lg mr-3'
        >
          + Create New Topic
        </div>
        {!isEmpty(userName) ? (
          <>
            <div>
              <svg
                className='w-6 h-6 m-auto'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                ></path>
              </svg>
              {userName}
            </div>
            <span
              onClick={() => Logout()}
              className='text-center p-0 m-0 border border-white bg-gray-300'
              style={{
                fontSize: "7px",
                "writing-mode": "vertical-rl",
                "text-orientation": "upright",
              }}
            >
              Logout
            </span>
          </>
        ) : (
          <div>
            <GoogleLogin
              clientId='522822790307-rjvps2k5ph51e137dt9euhesr8jdlh2m.apps.googleusercontent.com'
              buttonText='Login'
              onSuccess={(res) => {
                responseGoogle(res);
                console.log(
                  "res",
                  res.profileObj.givenName + "" + res.profileObj.familyName
                );
              }}
              onFailure={(err) => console.log("err", err)}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
