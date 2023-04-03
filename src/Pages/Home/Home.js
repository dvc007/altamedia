import React from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { logoutInitiate } from "./../../Redux/actions";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleAuth = () => {
    console.log("HiHI");
    if (currentUser) {
      dispatch(logoutInitiate);
    }
  };

  return (
    <div>
      Home
      <Button onClick={handleAuth}></Button>
    </div>
  );
};

export default Home;
