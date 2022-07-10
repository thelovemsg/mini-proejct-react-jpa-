import { Button } from "antd";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";
const profile = () => {
  const dispatch = useDispatch();
  const { loginHandling } = useSelector((state) => state.user);
  const tryLogout = useCallback(() => {
    dispatch(LOG_OUT_REQUEST());
  });
  return (
    <>
      <div>profile</div>
      <Button onClick={tryLogout} loading={loginHandling}>
        로그아웃 하기
      </Button>
    </>
  );
};

export default profile;
