import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import { vi } from "faker/lib/locales";
import { FOLLOW_REQUEST, UNFOLLOW_REQUEST } from "../reducers/user";
import { useSelector, useDispatch } from "react-redux";

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, followLoading, unfollowLoading } = useCallback(
    (state) => state.user
  );
  const isFollowing = me && me.Followings.find((v) => v.id === post.User.id);
  const onClickButton = useCallback(() => {
    if (isFollowing) {
      dispatch({
        type: UNFOLLOW_REQUEST,
        data: post.User.id,
      });
    } else {
      dispatch({
        type: FOLLOW_REQUEST,
        data: post.User.id,
      });
    }
  }, [isFollowing]);
  return (
    <>
      <Button
        loading={followLoading || unfollowLoading}
        onClick={onClickButton}
      >
        {isFollowing ? "언팔로우" : "팔로우"}
      </Button>
    </>
  );
};

FollowButton.propTypes = {
  post: PropTypes.object.isRequired,
};

export default FollowButton;
