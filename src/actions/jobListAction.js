import axios from "axios";
import {
  JOB_LIST_FAIL,
  JOB_LIST_REQUEST,
  JOB_LIST_SUCCESS,
} from "../constants/jobListConstants";
import config from "../utils/app-config";

export const listJobs = (pageNumber) => async (dispatch, getState) => {
  dispatch({
    type: JOB_LIST_REQUEST,
  });
  try {
    const { userSingin } = getState();
    const url =
      pageNumber > 1
        ? `${config.endpoint}/recruiters/jobs?page=${pageNumber}`
        : `${config.endpoint}/recruiters/jobs`;

    const { data } = await axios.get(url, {
      headers: { Authorization: `${userSingin.userInfo.token}` },
    });
    dispatch({ type: JOB_LIST_SUCCESS, payload: data.data.data });
  } catch (error) {
    dispatch({
      type: JOB_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
