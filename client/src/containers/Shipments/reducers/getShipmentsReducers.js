import types from "../constants/shipmentsConstants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

export const shipments = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SHIPMENTS:
      return {
        ...state,
        loading: true,
      };
    case types.GET_SHIPMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case types.GET_SHIPMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.error
      };
    case types.GET_SHIPMENTS_RESET:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
