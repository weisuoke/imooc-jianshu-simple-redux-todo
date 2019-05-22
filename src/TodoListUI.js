import React, { Component } from "react";
import { Input, Button, List } from "antd";

export default class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginTop: "10px", marginLeft: "10px" }}>
        <div>
          <Input
            placeholder="todo info"
            style={{ width: 300, marginRight: "10px" }}
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>
            提交
          </Button>
        </div>
        <List
          style={{ marginTop: "10px", width: "300px" }}
          size="small"
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.props.handleItemDelete.bind(this, index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}
