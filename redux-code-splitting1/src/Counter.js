import { Button } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumberAction,
  divNumberAction,
  mulNumberAsync,
  selectNumber,
  subNumberAction,
} from "./reducers/number";

const Counter = () => {
  const number = useSelector(selectNumber);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ color: "white" }}>{number}</div>
      <div>
        <Button type="primary" onClick={() => dispatch(addNumberAction(1))}>
          add number
        </Button>
        <Button
          type="danger"
          style={{ marginLeft: 20, marginRight: 20 }}
          onClick={() => dispatch(subNumberAction(1))}
        >
          substract number
        </Button>
        <Button
          type="primary"
          style={{ marginRight: 20 }}
          onClick={() => dispatch(mulNumberAsync())}
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
