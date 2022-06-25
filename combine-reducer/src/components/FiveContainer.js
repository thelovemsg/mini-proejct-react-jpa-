import React from "react";
import { connect } from "react-redux";
import { multiplyFive } from "../redux";

function FiveContainer(props) {
  return (
    <div className="FiveContainer">
      <h1>{props.val_five}</h1>
      <h3>Click the button to multiply the above number by 5</h3>
      <button onClick={props.multiplyFive}>Multiply by 5</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    val_five: state.five.val_five,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    multiplyFive: () => dispatch(multiplyFive()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiveContainer);
