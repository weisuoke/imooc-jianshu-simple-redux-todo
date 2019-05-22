import {
  DELETE_TODO_ITEM,
  ADD_TODO_ITEM,
  CHANGE_INPUT_VALUE
} from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = (value) => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})


