import { APPLICATION_LIST_FAIL, APPLICATION_LIST_MESSAGE, APPLICATION_LIST_REQUEST, APPLICATION_LIST_SUCCESS } from "../constants/applicationConstant";

export const applicationListReducer = (
    state = { loading: true, applications: [], message:'' },
    action
  ) => {
    switch (action.type) {
      case APPLICATION_LIST_REQUEST:
        return { loading: true };
      case APPLICATION_LIST_SUCCESS:
        return { loading: false, applications: action.payload };
      case APPLICATION_LIST_MESSAGE:
        return {loading:false, message:action.payload,applications:[]}  
      case APPLICATION_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };