import { put, takeEvery } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from './actionCreators'
import axios from "axios";

function* getInitList() {
  try {
    const res = yield axios("http://localhost:3443/list");
    const action = initListAction(res.data);
    yield put(action)
  } catch(e) {
    console.log('list网络请求失败')
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
