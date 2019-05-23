import React from "react";
import { Input, Button, List } from "antd";

// 构建无状态组件
const TodoListUI = props => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input
          placeholder="todo info"
          style={{ width: 300, marginRight: "10px" }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "300px" }}
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={props.handleItemDelete.bind(this, index)}>
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodoListUI;
