import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { applicationListReducer } from "./reduces/applicationListReducer";
import { jobListReducer } from "./reduces/jobListReducer";
import { userSinginReducer } from "./reduces/userReducer";


const initailState = {
  userSingin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  userSingin: userSinginReducer,
  jobList :jobListReducer,
  jobApplication:applicationListReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initailState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;