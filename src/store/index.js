import { createStore } from "redux";

import reducer from './reducer'

// 创建了公共存储仓
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
