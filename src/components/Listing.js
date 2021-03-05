import React, { useState } from "react";

const Listing = ({ dataList, select }) => {
  return (
    <div>
      <div className='flex mb-2'>
        <div className='dark:text-white'>Topic</div>
        <div className='ml-auto dark:text-white'>Replies</div>
      </div>
      <hr className='mb-2' />
      {dataList &&
        dataList.map((data, index) => (
          <div key={index} className='' onClick={() => select(index)}>
            <div className='flex'>
              <div className='dark:text-white mt-2'>{data.title}</div>
              <div className='ml-auto mr-5 dark:text-white mt-2'>
                {data.reply ? data.reply.length : 0}
              </div>
            </div>
            <div className='mb-1'>
              {data.catagory &&
                data.catagory.map((x, index) => (
                  <span
                    key={index}
                    className='m-1 bg-gray-300 ml-0 pl-3 pr-3 rounded-lg text-gray-500 dark:text-black'
                  >
                    {x.name}
                  </span>
                ))}
            </div>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Listing;
