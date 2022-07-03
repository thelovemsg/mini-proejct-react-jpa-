import { Button, InputNumber } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumberAction,
  addNumberAsyncAction,
  divNumberAction,
  mulNumberAction,
  subNumberAction,
  subNumberAsyncAction,
} from "./sagas/number";

const Counter = () => {
  const number = useSelector((state) => state.number.number);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ color: "white" }}>{number}</div>
      <div>
        <Button type="primary" onClick={() => dispatch(addNumberAction(2))}>
          add number
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 20, marginRight: 20 }}
          onClick={() => dispatch(addNumberAsyncAction(2))}
        >
          add async number
        </Button>
        <Button type="danger" onClick={() => dispatch(subNumberAction(2))}>
          substract number
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 20, marginRight: 20 }}
          onClick={() => dispatch(subNumberAsyncAction(2))}
        >
          substract async number
        </Button>
        <Button
          style={{ marginRight: 20 }}
          type="primary"
          onClick={() => dispatch(mulNumberAction(2))}
        >
          multiply number
        </Button>
        <Button type="danger" onClick={() => dispatch(divNumberAction(2))}>
          divide number
        </Button>
      </div>
    </>
  );
};

export default Counter;
