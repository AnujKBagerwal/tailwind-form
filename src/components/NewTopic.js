import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Modal from "../hooks/Modal";

const NewTopic = ({ newTopicToggle, toggleNewToggle, save }) => {
  const initialValues = {
    title: "",
    catagory: [],
    description: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().required("Please Enter Title"),
    catagory: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required("Name required"),
        })
      )
      .required("Please Enter Catagory"),
    description: Yup.string().required("Please Enter Description"),
  });

  return (
    <div>
      <Modal visible={newTopicToggle} onClose={() => toggleNewToggle()}>
        <h1 className='text-2xl p-2 pb-3 pl-0'>Create New Topic</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => save(values)}
          enableReinitialize
        >
          {({ values, setFieldValue }) => (
            <Form>
              <div className='grid-cols-1 '>
                <div className='mb-6'>
                  <label>Title</label>
                  <Field
                    type='text'
                    name='title'
                    placeholder={"Type title, or paste a link here"}
                    className='w-full mt-2 p-2 border-gray-400 border-2'
                  />
                  <span className='text-red-500 mt-0'>
                    <ErrorMessage name='title' />
                  </span>
                </div>
              </div>
              <div className='grid-cols-1 '>
                <div className='mb-6'>
                  <label>Catagory</label>
                  <Field
                    as='select'
                    name='catagory'
                    placeholder={"Select Catagory"}
                    className='w-full bg-transparent mt-2 p-2 border-gray-400 border-2'
                    defaultValue=''
                    onChange={(e) =>
                      setFieldValue("catagory", [{ name: e.target.value }])
                    }
                  >
                    <option value='' disabled>
                      Select Catagory
                    </option>
                    <option value='texterLoader'>Texter Loader</option>
                    <option value='objLoader'>OBJ Loader</option>
                    <option value='fbxLoader'>FBX Loader</option>
                  </Field>
                  <span className='text-red-500 mt-0'>
                    <ErrorMessage name='catagory[0].name' />
                  </span>
                </div>
              </div>
              <div className='grid-cols-1 '>
                <div className='mb-6'>
                  <label>Description</label>
                  <Field
                    type='textarea'
                    name='description'
                    placeholder={"Description"}
                    className='w-full mt-2  p-2 border-gray-400 border-2'
                    rows='6'
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
                    Submit
                  </button>
                </div>
                <div>
                  <button
                    className='m-2 bg-gray-500 p-2 text-white rounded-lg'
                    type='button'
                    onClick={() => toggleNewToggle()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
              {/* {JSON.stringify(values, null, 2)} */}
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default NewTopic;
