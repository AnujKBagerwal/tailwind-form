import React, { useState } from "react";

const Listing = ({ dataList, select, EditData }) => {
  return (
    <div>
      <div className='flex mb-2 p-2'>
        <div className='dark:text-white'>Topic</div>
        <div className='ml-auto dark:text-white flex'>
          <div className='mr-2'>Replies</div>
          <div className='mr-2'>Edit</div>
        </div>
      </div>
      <hr className='mb-2' />
      {dataList &&
        dataList.map((data, index) => (
          <div key={index} className=''>
            <div className='flex'>
              <div className='w-full' onClick={() => select(index)}>
                <div className='dark:text-white mt-2 w-max'>{data.title}</div>
                <div className='dark:text-white mt-2 w-max'>
                  {data.catagory &&
                    data.catagory.map((x, index) => (
                      <span
                        key={index}
                        className='m-1 bg-gray-300 ml-0 pl-3 pr-3 pt-1 pb-1 rounded-lg 
                        text-gray-500 dark:text-black'
                      >
                        {x.name}
                      </span>
                    ))}
                </div>
              </div>
              <div className='ml-auto flex'>
                <div className='m-auto w-10 dark:text-white'>
                  {data.reply ? data.reply.length : 0}
                </div>
                <div className='m-auto w-8' onClick={() => EditData(data)}>
                  <svg
                    className='w-5 h-5 dark:text-white '
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Listing;
