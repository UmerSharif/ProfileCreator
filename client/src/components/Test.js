import React from "react";
import { connect } from "react-redux";

const Test = ({ count, onAdd }) => {
  return (
    <div>
      <p>Connect to redux</p>
      <p>Count:{count}</p>
      <button onClick={onAdd}>Add</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => {
      const action = { type: "ADD" };
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test);
