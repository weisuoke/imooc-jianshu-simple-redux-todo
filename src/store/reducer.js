import {
  DELETE_TODO_ITEM,
  ADD_TODO_ITEM,
  CHANGE_INPUT_VALUE
} from "./actionTypes";

const defaultState = {
  inputValue: "123",
  list: [1, 2]
};

// reducer 可以接收state，但是不能修改state。这就是我们为什么要拷贝出来一个新的state
export default (state = defaultState, action) => {
  console.log(state, action);
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    console.log(newState)
    return newState;
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1)
    return newState
  }
  return state;
};
