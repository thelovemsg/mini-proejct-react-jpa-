import PropTypes from "prop-types";
import React, { useCallback } from "react";
import { Button, Form, Input } from "antd";
import useInput from "./useInput";
import { useSelector } from "react-redux";
import { StarTwoTone } from "@ant-design/icons";

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: "relative", margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          type="primary"
          style={{ position: "absolute", right: 0, bottom: -40 }}
          htmlType="submit"
        >
          뺘뺙
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
