import React, { Component } from "react";
import store from "./store";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  render() {
    const { inputValue, handleClick, changeInputValue } = this.props
    return (
      <div>
        <div>
          <input
            value={inputValue}
            onChange={changeInputValue}
          />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {this.props.list.map((item, index) => {
            return <li onClick={this.props.handleDelete.bind(this, index)} key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInputValue: e => {
      const action = {
        type: "change_input_value",
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick: () => {
      const action = {
        type: "add_item"
      };
      dispatch(action);
    },
    handleDelete: (index) => {
      console.log(index)
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
