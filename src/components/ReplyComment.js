import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ReplyComment = ({ data, save, closeCommentFlag }) => {
  const [desToggle, setDesToggle] = useState(false);

  const initialValues = {
    description: "",
  };

  const validationSchema = Yup.object({
    description: Yup.string().required("Please Enter Description"),
  });

  const addDesc = (value) => {
    let tmp = Object.assign({}, data);
    tmp.reply.push({ des: value.description });
    save(tmp);
  };

  return (
    <div>
      <div>
        <button
          className='m-2 ml-0 bg-gray-200 dark:bg-gray-500 p-2 dark:text-white rounded-lg w-1/12'
          type='button'
          onClick={() => {
            closeCommentFlag();
          }}
        >
          Back
        </button>
      </div>
      <h1 className='text-3xl dark:text-white '>{data.title}</h1>
      <div className='mb-1'>
        {data.catagory &&
          data.catagory.map((x, index) => (
            <span
              key={index}
              className='m-1 ml-0 pl-3 pr-3  text-gray-500 dark:text-yellow-300 '
            >
              {x.name}
            </span>
          ))}
      </div>
      <hr />
      <div className='bg-gray-200 dark:bg-gray-700 h-96 m-4'>
        <div className='p-4 dark:text-white'>{data.description}</div>
      </div>
      <div className='flex'>
        <div
          className='flex bg-gray-200 dark:bg-transparent dark:text-white ml-auto'
          onClick={() => setDesToggle(!desToggle)}
        >
          <div className='w-5 h-5 ml-auto  mr-2'>
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
                d='M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6'
              />
            </svg>
          </div>
          <span className=''>reply</span>
        </div>
      </div>

      {desToggle && (
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => addDesc(values)}
          enableReinitialize
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className='grid-cols-1 '>
                <div className='mb-6'>
                  {/* <label>Description</label> */}
                  <Field
                    type='textarea'
                    name='description'
                    placeholder={"Description"}
                    className='w-full mt-2  p-2 border-gray-400 border-2'
                    rows='6'
                    onChange={(e) => {
                      setFieldValue("description", e.target.value);
                    }}
                  />
                  <span className='text-red-500 mt-0'>
                    <ErrorMessage name='description' />
                  </span>
                </div>
              </div>
              <div className='flex'>
                <div>
                  <button
                    className='m-2 bg-blue-500 p-2 text-white rounded-lg'
                    type='submit'
                  >
                    Reply
                  </button>
                </div>
                <div>
                  <button
                    className='m-2 bg-gray-500 p-2 text-white rounded-lg'
                    type='button'
                    onClick={() => {
                      setFieldValue("description", "");
                      setDesToggle(!desToggle);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              {/* {JSON.stringify(values, null, 2)} */}
            </Form>
          )}
        </Formik>
      )}
      {data.reply &&
        data.reply.map((rep, index) => {
          return (
            <>
              <div key={index} className='m-3 bg-gray-200 p-3'>
                {rep.des}
              </div>
              <hr />
            </>
          );
        })}
    </div>
  );
};

export default ReplyComment;
