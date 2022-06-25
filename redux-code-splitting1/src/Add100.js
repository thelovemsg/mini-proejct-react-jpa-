import React, { useCallback, useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { add100Action, selectAdd100 } from "./reducers/add100";

const Add100 = () => {
  const number = useSelector(selectAdd100);
  const changeNumber = useCallback(() => {
    dispatch(add100Action());
  }, []);
  const dispatch = useDispatch();
  return (
    <>
      <div>{number}</div>
      <Button
        style={{ marginTop: "20px" }}
        type="primary"
        onClick={changeNumber}
      >
        add 100
      </Button>
    </>
  );
};

export default Add100;
