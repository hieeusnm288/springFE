// Cấu hình Redusers => sử dụng store của Redux

import { combineReducers } from "redux";
import caregoryReducer from "./reducers/categoryReducres";

const rootReducer = combineReducers({
  caregoryReducer,
});

export default rootReducer;
