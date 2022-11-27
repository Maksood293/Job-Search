import axios from "axios";
import {
  APPLICATION_LIST_FAIL,
  APPLICATION_LIST_MESSAGE,
  APPLICATION_LIST_REQUEST,
  APPLICATION_LIST_SUCCESS,
} from "../constants/applicationConstant";

import config from "../utils/app-config";

export const applicationListAction = (Id) => async (dispatch, getState) => {
  dispatch({
    type: APPLICATION_LIST_REQUEST,
  });
  try {
    const { userSingin } = getState();
    const { data } = await axios.get(
      `${config.endpoint}/recruiters/jobs/${Id}/candidates`,
      {
        headers: { Authorization: `${userSingin.userInfo.token}` },
      }
    );
    if (data.message) {
      return dispatch({
        type: APPLICATION_LIST_MESSAGE,
        payload: data.message,
      });
    }
    dispatch({ type: APPLICATION_LIST_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({
      type: APPLICATION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
