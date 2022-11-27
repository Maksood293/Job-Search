import axios from "axios";
import {
  USER_SINGIN_FAIL,
  USER_SINGIN_REQUEST,
  USER_SINGIN_SUCCESS,
  USER_SINGOUT,
} from "../constants/userConstants";
import config from "../utils/app-config";

export const singin = (email, password) => async (dispatch) => {
  console.log("aaua");
  dispatch({ type: USER_SINGIN_REQUEST, payload: { email, password } });
  try {
    const { data } = await axios.post(`${config.endpoint}/auth/login`, {
      email,
      password,
    });
    dispatch({ type: USER_SINGIN_SUCCESS, payload: data?.data });
    localStorage.setItem("userInfo", JSON.stringify(data?.data));
  } catch (error) {
    dispatch({
      type: USER_SINGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const singout = (aaya) => (dispatch) => {
  console.log(aaya);
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_SINGOUT });
  window.location.reload();
};
