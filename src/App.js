import { isEmpty, uniqueId } from "lodash";
import React, { useEffect, useState } from "react";
import Listing from "./components/Listing";
import Nav from "./components/Nav";
import NewTopic from "./components/NewTopic";
import ReplyComment from "./components/ReplyComment";

const App = () => {
  const [newTopicToggle, setNewTopicToggle] = useState(false);
  const [dataList, setDataList] = useState([
    {
      id: uniqueId(),
      title: "lorem",
      catagory: [{ name: "texterLoader" }],
      description: "asfsdfsfsfsf",
      reply: [{ des: "sdf" }],
    },
  ]);
  const [editData, setEditData] = useState();
  const [selectComment, setSelectComment] = useState({});
  const [selectCommentFlag, setSelectCommentFlag] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let response = JSON.parse(localStorage.getItem("LoginData"));
    if (!isEmpty(response))
      setUserName(
        `${response.profileObj.givenName} ${response.profileObj.familyName}`
      );
  }, [localStorage.getItem("LoginData")]);

  const Reset = () => {
    setNewTopicToggle(false);
    setEditData();
    setSelectComment({});
    setSelectCommentFlag(false);
    setUserName("");
  };

  const toggleNewToggle = () => {
    setEditData({});
    setNewTopicToggle(!newTopicToggle);
  };

  const setData = (value) => {
    let data = Object.assign([], dataList);
    const idx = data.findIndex((el) => el.id === value.id);
    console.log("idx", idx);
    if (idx === -1) {
      value.id = uniqueId();
      data = data.concat(value);
    } else {
      data[idx] = value;
    }
    console.log("dataList", dataList);
    console.log("value", value);
    // for (let i = 0; i < data.length; i++) {
    //   if (data[i].id === value.id) {
    //     data[i] = value;
    //   } else {
    //     // value.id = uniqueId();
    //     data.concat(value);
    //   }
    // }

    console.log("data", data);
    // let data = Object.assign([], dataList);
    // data.map((x, index) =>
    //   x.id === value.id
    //     ? (data[index] = value)
    //     : (value.id = uniqueId()) && data.push(value)
    // );
    setDataList(data);
    setEditData({});
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

  const EditData = (data) => {
    console.log("data", data);
    setEditData(data);
    setNewTopicToggle(!newTopicToggle);
  };

  const responseGoogle = (response) => {
    console.log(response);
    if (response.tokenId) {
      localStorage.setItem("LoginData", JSON.stringify(response));
      setUserName(
        `${response.profileObj.givenName} ${response.profileObj.familyName}`
      );
    } else {
      alert("something may wrong please try again !!");
    }
  };

  const Logout = () => {
    localStorage.clear();
    Reset();
  };
  return (
    <>
      <div className=' min-h-screen dark:bg-black transition duration-500'>
        <Nav
          toggleNewToggle={() => toggleNewToggle()}
          Reset={() => Reset()}
          responseGoogle={(res) => responseGoogle(res)}
          userName={userName}
          Logout={Logout}
        />
        <div className='absolute'></div>
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
                EditData={EditData}
                select={(number) => selectData(number)}
              />
              {newTopicToggle && (
                <NewTopic
                  newTopicToggle={newTopicToggle}
                  toggleNewToggle={() => toggleNewToggle()}
                  save={(value) => setData(value)}
                  editData={editData}
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
