import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  DELETE_TODO_ITEM,
  ADD_TODO_ITEM,
  CHANGE_INPUT_VALUE
} from "./store/actionTypes";

import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreators";

import "antd/dist/antd.css";

// const data = [
//   "Racing car sprays burning fuel into crowd.",
//   "Japanese princess to wed commoner.",
//   "Australian walks 100km after outback crash.",
//   "Man charged over missing wedding girl.",
//   "Los Angeles battles huge wildfires."
// ];

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    // 这个组件去订阅 store，store 改变则自动自行
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            placeholder="todo info"
            style={{ width: 300, marginRight: "10px" }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          size="small"
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    console.log("store changed");
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action);
    console.log(index);
  }
}

export default TodoList;
