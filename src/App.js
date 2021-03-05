import React, { useState } from "react";
import Listing from "./components/Listing";
import Nav from "./components/Nav";
import NewTopic from "./components/NewTopic";
import ReplyComment from "./components/ReplyComment";

const App = () => {
  const [newTopicToggle, setNewTopicToggle] = useState(false);
  const [dataList, setDataList] = useState([
    {
      title: "lorem",
      catagory: [{ name: "a" }, { name: "b" }],
      description: "asfsdfsfsfsf",
      reply: [{ des: "sdf" }],
    },
  ]);
  const [selectComment, setSelectComment] = useState();
  const [selectCommentFlag, setSelectCommentFlag] = useState(false);

  const toggleNewToggle = () => {
    setNewTopicToggle(!newTopicToggle);
  };

  const setData = (value) => {
    let data = Object.assign([], dataList);
    data.push(value);
    setDataList(data);
    toggleNewToggle();
  };

  const selectData = (number) => {
    setSelectCommentFlag(true);
    setSelectComment(number);
  };

  const closeCommentFlag = (number) => {
    setSelectCommentFlag(false);
    setSelectComment("");
  };

  const setReply = (data) => {
    setSelectCommentFlag(false);
    setSelectComment("");
  };

  return (
    <>
      <div className=' min-h-screen dark:bg-black transition duration-500'>
        <Nav toggleNewToggle={() => toggleNewToggle()} />
        <div className='m-16 p-0'>
          {/* <h1 className='text-blue-400 dark:text-white text-5xl'>Hello</h1> */}
          {selectCommentFlag ? (
            <ReplyComment
              data={dataList[selectComment]}
              save={(data) => setReply(data)}
              closeCommentFlag={() => closeCommentFlag()}
            />
          ) : (
            <>
              <Listing
                dataList={dataList}
                select={(number) => selectData(number)}
              />
              {newTopicToggle && (
                <NewTopic
                  newTopicToggle={newTopicToggle}
                  toggleNewToggle={() => toggleNewToggle()}
                  save={(value) => setData(value)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
